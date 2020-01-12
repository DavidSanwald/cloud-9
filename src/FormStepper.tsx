import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  }
}));

type Step = {
  label: string;
};

type Props = {
  steps: Step[];
  activeStep: number;
};

const FormStepper: React.FC<Props> = ({ activeStep, steps }) => {
  const classes = useStyles();

  return (
    <>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(({ label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export { FormStepper };
