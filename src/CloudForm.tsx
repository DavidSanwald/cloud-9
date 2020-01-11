/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { SubscriptionPage } from "SubscriptionPage";
import { Debugger } from "Debugger";
import { UserDataPage } from "UserDataPage";
import { CreditDataPage } from "CreditDataPage";
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
import { ConfirmationPage } from "ConfirmationPage";

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
const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  email: yup.string().email()
});

const steps = [
  "Subscription",
  "User Details",
  "Payment Details",
  "Confirmation"
];

const initialValues = {
  duration: 12,
  amount: 5,
  upfront: false,
  lastName: "",
  firstName: "",
  address: "",
  expDate: "",
  CVV: ""
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
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={() => {}}
          >
            {() => (
              <Form>
                {getStepContent(activeStep)}
                <Debugger />
              </Form>
            )}
          </Formik>
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
              variant="contained"
              color="primary"
              onClick={() =>
                setActiveStep(prevStep => clamp(prevStep + 1, 0, 3))
              }
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
};

export { CloudForm };
