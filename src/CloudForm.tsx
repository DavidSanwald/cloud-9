/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import { SubscriptionPage } from "Pages/SubscriptionPage";
// import { Debugger } from "Debugger";
import { UserDataPage } from "Pages/UserDataPage";
import { CreditDataPage } from "Pages/CreditDataPage";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button
} from "@material-ui/core";
import { ConfirmationPage } from "Pages/ConfirmationPage";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
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

const CloudForm: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Cloud 9
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {formSteps.map(({ label }) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Formik
            validationSchema={formSteps[activeStep].schema}
            initialValues={initialValues}
            onSubmit={values => {
              if (activeStep < 3) {
                setActiveStep(prevStep => clamp(prevStep + 1, 0, 3));
              } else {
                console.log("sumbitting: ", values);
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
        </Paper>
      </main>
    </>
  );
};

export { CloudForm };
