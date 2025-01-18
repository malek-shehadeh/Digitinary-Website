
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepValidation from "../Arena/StepValidation";
import "./ProgressStepper.scss";

interface ProgressStepperProps {
  steps: {
    title: string;
    id: string;
    optional?: boolean;
  }[];
  activeStep: number;
  onStepChange: (step: number) => void;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ 
  steps, 
  activeStep,
  onStepChange 
}) => {
  const navigate = useNavigate();
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [showValidation, setShowValidation] = React.useState(false);

  const isStepOptional = (step: number) => {
    return steps[step]?.optional || false;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // If it's the last step, navigate to home page
      navigate('/');
    } else {
      setShowValidation(true);
    }
  };

  const handleBack = () => {
    onStepChange(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    onStepChange(activeStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    onStepChange(0);
    setSkipped(new Set<number>());
  };

  const handleValidationComplete = (success: boolean) => {
    if (success) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      onStepChange(activeStep + 1);
      setSkipped(newSkipped);
    }
    setShowValidation(false);
  };

  return (
    <Box className="progress-stepper-container">
      <Stepper activeStep={activeStep} className="stepper">
        {steps.map(({ title, optional }, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (optional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={title} {...stepProps}>
              <StepLabel {...labelProps}>{title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div className="stepper-content">
        {activeStep === steps.length ? (
          <>
            <Typography className="step-text">
              All steps completed - you're finished
            </Typography>
            <Box className="button-container">
              <Box className="spacer" />
              <Button onClick={() => navigate('/')} variant="contained">
                Go to Home
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box className="button-container">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                className="back-button"
              >
                Back
              </Button>
              <Box className="spacer" />
              {isStepOptional(activeStep) && (
                <Button
                  color="inherit"
                  onClick={handleSkip}
                  className="skip-button"
                >
                  Skip
                </Button>
              )}
              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </div>

      <StepValidation
        open={showValidation}
        onClose={() => setShowValidation(false)}
        onValidationComplete={handleValidationComplete}
        currentStep={activeStep}
      />
    </Box>
  );
};

export default ProgressStepper;