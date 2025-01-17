// src/components/D-gate/CustomModule.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import {
  Extension,
  Description,
  Code,
  AddCircle,
  Settings,
  SystemUpdate,
  ContentCopy,
  HelpOutline,
} from '@mui/icons-material';

interface CustomModuleProps {
  isSidebarOpen: boolean;
}

const CustomModule: React.FC<CustomModuleProps> = ({ isSidebarOpen }) => {
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

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Card sx={{ backgroundColor: '#f8f9fa' }}>
        <CardContent>
          <Grid container spacing={3}>
            {/* Main Title */}
            <Grid item xs={12}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                color="primary"
                sx={{ 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Extension sx={{ fontSize: 32 }} />
                Step 5: Creating a Custom Module
              </Typography>
            </Grid>

            {/* Overview Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Description />
                  Overview
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
                  A step-by-step guide on creating a new custom module using the project's CLI.
                  Follow these instructions to create and integrate your module effectively.
                </Typography>
              </Paper>
            </Grid>

            {/* Steps Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3
                  }}
                >
                  <Code />
                  Steps to Create a Module
                </Typography>

                <Stepper orientation="vertical" sx={{ ml: 2 }}>
                  {moduleSteps.map((step, index) => (
                    <Step key={step.label} active={true}>
                      <StepLabel icon={<step.icon color="primary" />}>
                        <Typography color="primary" fontWeight={500}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Box sx={{ mb: 2 }}>
                          <Typography color="text.secondary" paragraph>
                            {step.description}
                          </Typography>
                          <Paper 
                            sx={{ 
                              p: 2, 
                              backgroundColor: '#f5f5f5',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2
                            }}
                          >
                            <code style={{ flex: 1 }}>{step.command}</code>
                            <Tooltip title="Copy command">
                              <IconButton 
                                size="small"
                                onClick={() => handleCopyCommand(step.command)}
                              >
                                <ContentCopy />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="More information">
                              <IconButton size="small">
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
            </Grid>

            {/* Success Message */}
            <Grid item xs={12}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  backgroundColor: '#e8f5e9',
                  borderLeft: '4px solid #4caf50'
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#2e7d32'
                  }}
                >
                  Congratulations! You've completed all the steps. Your custom module is now ready for development.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomModule;