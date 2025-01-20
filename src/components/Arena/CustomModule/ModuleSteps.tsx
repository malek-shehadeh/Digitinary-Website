import React from 'react';
import {
  Typography,
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Tooltip,
  IconButton,
} from '@mui/material';
import {
  Code,
  AddCircle,
  Settings,
  SystemUpdate,
  ContentCopy,
  HelpOutline,
} from '@mui/icons-material';

interface ModuleStepsProps {
  isDark: boolean;
}

const moduleSteps = [
  {
    label: 'Generate the Module',
    description: 'Use the project CLI to generate a new module structure.',
    command: 'npx create-module my-custom-module',
    icon: AddCircle,
  },
  {
    label: 'Add Components, Services, or Directives',
    description: 'Create necessary components and services for your module.',
    command: 'npx generate component my-component',
    icon: Code,
  },
  {
    label: 'Configure the Module',
    description: 'Set up module configuration and dependencies.',
    command: 'Configure module settings in module.config.ts',
    icon: Settings,
  },
  {
    label: 'Import the Module into the Main Application',
    description: 'Add the module to your main application imports.',
    command: "import { MyCustomModule } from './modules/my-custom-module';",
    icon: SystemUpdate,
  },
];

const ModuleSteps: React.FC<ModuleStepsProps> = ({ isDark }) => {
  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
  };

  return (
    <Paper className="section-paper">
      <Typography
        variant="h6"
        gutterBottom
        color="primary"
        className="section-header"
      >
        <Code />
        Steps to Create a Module
      </Typography>

      <Stepper orientation="vertical" className="module-stepper">
        {moduleSteps.map((step) => (
          <Step key={step.label} active={true}>
            <StepLabel icon={<step.icon color="primary" />}>
              <Typography color="primary" className="step-label">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Box className="step-content">
                <Typography className="step-description">
                  {step.description}
                </Typography>
                <Paper className={`command-paper ${isDark ? 'dark' : 'light'}`}>
                  <code className="command-code">
                    {step.command}
                  </code>
                  <Tooltip title="Copy command">
                    <IconButton
                      size="small"
                      onClick={() => handleCopyCommand(step.command)}
                      className="command-button"
                    >
                      <ContentCopy />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="More information">
                    <IconButton
                      size="small"
                      className="command-button"
                    >
                      <HelpOutline />
                    </IconButton>
                  </Tooltip>
                </Paper>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};

export default ModuleSteps;