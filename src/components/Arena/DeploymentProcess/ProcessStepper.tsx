

//src/components/Arena/DeploymentProcess/ProcessStepper.tsx
import React from 'react';
import { 
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent 
} from '@mui/material';
import { BugReport } from '@mui/icons-material';
import { deploymentSteps, environments } from './data';

interface ProcessStepperProps {
  isDark: boolean;
}

const ProcessStepper: React.FC<ProcessStepperProps> = ({ isDark }) => (
  <div className="process-stepper">
    <div className="stepper-header">
      <BugReport />
      <Typography variant="h6" color="primary">
        Jira and Ticket Process
      </Typography>
    </div>

    <Stepper 
      orientation="vertical" 
      className="stepper"
    >
      {deploymentSteps.map((step, index) => (
        <Step key={step.label} active={true}>
          <StepLabel
            StepIconProps={{
              sx: {
                color: isDark ? environments[index].color.dark : environments[index].color.light
              }
            }}
          >
            <Typography color="primary" fontWeight={500}>
              {step.label}
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography className="step-description">
              {step.description}
            </Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  </div>
);

export default ProcessStepper;