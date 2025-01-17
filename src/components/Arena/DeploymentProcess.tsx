// src/components/D-gate/DeploymentProcess.tsx
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
} from '@mui/material';
import {
  Rocket,
  Description,
  DeveloperMode,
  BugReport,
  Visibility,
  Timeline,
} from '@mui/icons-material';

interface DeploymentProcessProps {
  isSidebarOpen: boolean;
}

const DeploymentProcess: React.FC<DeploymentProcessProps> = ({ isSidebarOpen }) => {
  const environments = [
    {
      name: 'Develop',
      description: 'Used for ongoing development.',
      icon: DeveloperMode,
      color: '#4caf50', // Green
    },
    {
      name: 'Test',
      description: 'For the QA team to verify changes.',
      icon: BugReport,
      color: '#2196f3', // Blue
    },
    {
      name: 'Staging (STG)',
      description: 'Pre-production environment for client reviews.',
      icon: Visibility,
      color: '#ff9800', // Orange
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
                <Rocket sx={{ fontSize: 32 }} />
                Step 4: Deployment Process
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
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  The project has three deployment environments, each with specific purposes:
                </Typography>

                <Grid container spacing={2}>
                  {environments.map((env) => (
                    <Grid item xs={12} md={4} key={env.name}>
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 2,
                          height: '100%',
                          borderLeft: `4px solid ${env.color}`,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <env.icon sx={{ color: env.color }} />
                          <Typography variant="h6" color="primary">
                            {env.name}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {env.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            {/* Flow Diagram Section */}
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
                  <Timeline />
                  Deployment Flow
                </Typography>
                
                {/* Placeholder for the image */}
                <Box 
                  sx={{ 
                    width: '100%',
                    height: 300,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4
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
            </Grid>

            {/* Jira and Ticket Process Section */}
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
                  <BugReport />
                  Jira and Ticket Process
                </Typography>

                <Stepper orientation="vertical" sx={{ mt: 2 }}>
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
                        <Typography color="text.secondary">
                          {step.description}
                        </Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeploymentProcess;