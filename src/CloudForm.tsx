import React, { useState } from "react";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import { SubscriptionPage } from "Pages/SubscriptionPage";
import { UserDataPage } from "Pages/UserDataPage";
import { CreditDataPage } from "Pages/CreditDataPage";
import { Typography, Button } from "@material-ui/core";
import { ConfirmationPage } from "Pages/ConfirmationPage";
import { FormStepper } from "FormStepper";

const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const personSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(3),
  lastName: yup
    .string()
    .required()
    .min(3),
  street: yup
    .string()
    .required()
    .min(3),
  eMail: yup
    .string()
    .email()
    .required()
});

const subscriptionSchema = yup.object({
  amount: yup.mixed().oneOf([3, 5, 20, 30, 50]),
  upfront: yup.boolean().required(),
  duration: yup
    .mixed()
    .oneOf([3, 6, 12])
    .required()
});

const paymentSchema = yup.object({
  cardNumber: yup
    .number()
    .nullable()
    .required(),
  expDate: yup
    .date()
    .nullable()
    .required(),
  CVV: yup
    .number()
    .required()
    .nullable()
});

const termsSchema = yup.object({
  terms: yup.boolean().required()
});

type FormStep = {
  schema: yup.ObjectSchema;
  label: string;
};

const formSteps: FormStep[] = [
  { schema: subscriptionSchema, label: "Subscription Details" },
  { schema: personSchema, label: "User Details" },
  { schema: paymentSchema, label: "Payment Details" },
  { schema: termsSchema, label: "Confirmation" }
];

const initSubscription: yup.InferType<typeof subscriptionSchema> = {
  duration: 12,
  amount: 5,
  upfront: false
};
const initUser: yup.InferType<typeof personSchema> = {
  lastName: "",
  eMail: "",
  firstName: "",
  street: ""
};
const initPayment: yup.InferType<typeof paymentSchema> = {
  expDate: new Date(),
  CVV: null,
  cardNumber: null
};

const initialValues = {
  ...initSubscription,
  ...initUser,
  ...initPayment,
  terms: false
};
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <SubscriptionPage />;
    case 1:
      return <UserDataPage />;
    case 2:
      return <CreditDataPage />;
    case 3:
      return <ConfirmationPage />;
    default:
      throw new Error("Unknown step");
  }
}

function clamp(num: number, lower: number, upper: number) {
  return Math.max(lower, Math.min(upper, num));
}

type Props = {
  sendData: Function;
};

const CloudForm: React.FC<Props> = ({ sendData }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <FormStepper activeStep={activeStep} steps={formSteps} />
      <Formik
        validationSchema={formSteps[activeStep].schema}
        initialValues={initialValues}
        onSubmit={values => {
          if (activeStep < 3) {
            setActiveStep(prevStep => clamp(prevStep + 1, 0, 3));
          } else {
            const data = sendData(values);
            console.log(data);
          }
        }}
      >
        {({ values: { terms } }) => (
          <Form>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button
                  onClick={() =>
                    setActiveStep(prevStep => clamp(prevStep - 1, 0, 3))
                  }
                  className={classes.button}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={activeStep === 3 && !terms}
              >
                {activeStep === 3 ? "Place order" : "Next"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { CloudForm };
