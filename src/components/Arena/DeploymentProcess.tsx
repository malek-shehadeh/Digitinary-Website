// src/components/Arena/DeploymentProcess.tsx
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
  useTheme,
} from '@mui/material';
import {
  Rocket,
  Description,
  DeveloperMode,
  BugReport,
  Visibility,
  Timeline,
} from '@mui/icons-material';

const DeploymentProcess: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const environments = [
    {
      name: 'Develop',
      description: 'Used for ongoing development.',
      icon: DeveloperMode,
      color: isDark ? '#81c784' : '#4caf50', // Lighter green in dark mode
    },
    {
      name: 'Test',
      description: 'For the QA team to verify changes.',
      icon: BugReport,
      color: isDark ? '#64b5f6' : '#2196f3', // Lighter blue in dark mode
    },
    {
      name: 'Staging (STG)',
      description: 'Pre-production environment for client reviews.',
      icon: Visibility,
      color: isDark ? '#ffb74d' : '#ff9800', // Lighter orange in dark mode
    },
  ];

  const deploymentSteps = [
    {
      label: 'Deploy to Develop Environment',
      description: 'Deploy changes to the Develop environment and verify functionality.',
    },
    {
      label: 'Move to Test Environment',
      description: 'Once verified, move the changes to the Test environment for QA validation.',
    },
    {
      label: 'Prepare for Staging',
      description: 'After successful testing, mark the tickets as Ready for Test and prepare for deployment to STG.',
    },
  ];

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
                <Rocket sx={{ fontSize: 32 }} />
                Step 4: Deployment Process
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
                  mb: 3,
                  color: 'text.primary',
                  transition: 'color 0.3s ease'
                }}
              >
                The project has three deployment environments, each with specific purposes:
              </Typography>

              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
                gap: 2 
              }}>
                {environments.map((env) => (
                  <Paper 
                    key={env.name}
                    elevation={2}
                    sx={{ 
                      p: 2,
                      height: '100%',
                      borderLeft: `4px solid ${env.color}`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      bgcolor: 'background.paper',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <env.icon sx={{ color: env.color }} />
                      <Typography variant="h6" color="primary">
                        {env.name}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'text.secondary' }}
                    >
                      {env.description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Paper>

            {/* Flow Diagram Section */}
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
                <Timeline />
                Deployment Flow
              </Typography>
              
              <Box 
                sx={{ 
                  width: '100%',
                  height: 300,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 4,
                  transition: 'background-color 0.3s ease'
                }}
              >
                <img 
                  src="/api/placeholder/800/300"
                  alt="Deployment Flow"
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Paper>

            {/* Jira and Ticket Process Section */}
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
                <BugReport />
                Jira and Ticket Process
              </Typography>

              <Stepper 
                orientation="vertical" 
                sx={{ 
                  mt: 2,
                  '& .MuiStepConnector-line': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                  }
                }}
              >
                {deploymentSteps.map((step, index) => (
                  <Step key={step.label} active={true}>
                    <StepLabel
                      StepIconProps={{
                        sx: {
                          color: environments[index].color
                        }
                      }}
                    >
                      <Typography color="primary" fontWeight={500}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeploymentProcess;