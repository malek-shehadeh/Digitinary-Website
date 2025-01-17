// src/components/Arena/CustomModule.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Tooltip,
  IconButton,
  useTheme,
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
  CheckCircle,
} from '@mui/icons-material';

const CustomModule: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
      <Card sx={{ 
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease'
      }}>
        <CardContent>
          <Box sx={{ display: 'grid', gap: 3 }}>
            {/* Main Title */}
            <Box>
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
            </Box>

            {/* Overview Section */}
            <Paper elevation={3} sx={{ 
              p: 3, 
              bgcolor: 'background.default',
              transition: 'all 0.3s ease'
            }}>
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
              <Typography 
                variant="body1" 
                sx={{ 
                  ml: 4,
                  color: 'text.primary',
                  transition: 'color 0.3s ease'
                }}
              >
                A step-by-step guide on creating a new custom module using the project's CLI.
                Follow these instructions to create and integrate your module effectively.
              </Typography>
            </Paper>

            {/* Steps Section */}
            <Paper elevation={3} sx={{ 
              p: 3, 
              bgcolor: 'background.default',
              transition: 'all 0.3s ease'
            }}>
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

              <Stepper 
                orientation="vertical" 
                sx={{ 
                  ml: 2,
                  '& .MuiStepConnector-line': {
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                  }
                }}
              >
                {moduleSteps.map((step) => (
                  <Step key={step.label} active={true}>
                    <StepLabel icon={<step.icon color="primary" />}>
                      <Typography color="primary" fontWeight={500}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Box sx={{ mb: 2 }}>
                        <Typography 
                          sx={{ 
                            color: 'text.secondary',
                            mb: 2 
                          }}
                        >
                          {step.description}
                        </Typography>
                        <Paper 
                          sx={{ 
                            p: 2, 
                            bgcolor: isDark ? 'grey.900' : 'grey.100',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <code 
                            style={{ 
                              flex: 1,
                              color: isDark ? '#e6e6e6' : '#333333',
                            }}
                          >
                            {step.command}
                          </code>
                          <Tooltip title="Copy command">
                            <IconButton 
                              size="small"
                              onClick={() => handleCopyCommand(step.command)}
                              sx={{ 
                                color: 'primary.main',
                                '&:hover': {
                                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'
                                }
                              }}
                            >
                              <ContentCopy />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="More information">
                            <IconButton 
                              size="small"
                              sx={{ 
                                color: 'primary.main',
                                '&:hover': {
                                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'
                                }
                              }}
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

            {/* Success Message */}
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                bgcolor: isDark ? 'success.dark' : '#e8f5e9',
                borderLeft: `4px solid ${isDark ? theme.palette.success.main : '#4caf50'}`,
                transition: 'all 0.3s ease'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: isDark ? '#fff' : '#2e7d32'
                }}
              >
                <CheckCircle fontSize="small" />
                Congratulations! You've completed all the steps. Your custom module is now ready for development.
              </Typography>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomModule;