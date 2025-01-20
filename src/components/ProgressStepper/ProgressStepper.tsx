

import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import StepValidation from "../Arena/StepValidation";
import {
  ArrowRight,
  ArrowLeft,
  SkipForward,
  ClipboardList,
  PackageCheck,
  FileCheck,
  Book,
  Award,
  AlertCircle,
} from "lucide-react";
import "./ProgressStepper.scss";

import { StepIconProps } from "@mui/material/StepIcon";

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
  onStepChange,
}) => {
  const navigate = useNavigate();
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [showValidation, setShowValidation] = React.useState(false);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);

  const isStepOptional = (step: number) => {
    return steps[step]?.optional || false;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/");
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

  const getStepIcon = (index: number) => {
    const icons = {
      0: ClipboardList,
      1: PackageCheck,
      2: FileCheck,
      3: Book,
      4: Award,
    };
    return icons[index as keyof typeof icons] || ClipboardList;
  };

  const StepIcon: React.FC<StepIconProps> = ({ active, completed, icon }) => {
    const IconComponent = getStepIcon(Number(icon) - 1);
    return (
      <IconComponent
        className={`step-icon ${active ? "active" : ""} ${completed ? "completed" : ""}`}
      />
    );
  };

  return (
    <Box className="progress-stepper-container">
      <Stepper activeStep={activeStep} className="stepper">
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (step.optional) {
            labelProps.optional = (
              <div className="optional-label">
                <AlertCircle className="optional-icon" />
                <Typography variant="caption">Optional</Typography>
              </div>
            );
          }

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step
              key={step.id}
              {...stepProps}
              className={`step-item ${hoveredStep === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <StepLabel
                StepIconComponent={StepIcon} // Use the custom StepIcon
                {...labelProps}
                className={index < activeStep ? "completed" : ""}
              >
                <div className="step-content">
                  <Typography className="step-title">{step.title}</Typography>
                  <Typography className="step-description">
                    {index < activeStep
                      ? "Completed"
                      : index === activeStep
                      ? "In Progress"
                      : "Pending"}
                  </Typography>
                </div>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div className="button-container">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={`custom-button back-button ${activeStep === 0 ? "disabled" : ""}`}
        >
          <ArrowLeft className="button-icon" />
          Back
        </button>

        <div className="button-group-right">
          {isStepOptional(activeStep) && (
            <button onClick={handleSkip} className="custom-button skip-button">
              <SkipForward className="button-icon" />
              Skip
            </button>
          )}

          <button onClick={handleNext} className="custom-button next-button">
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
            <ArrowRight className="button-icon" />
          </button>
        </div>
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