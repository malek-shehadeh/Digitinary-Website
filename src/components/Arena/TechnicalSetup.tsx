// src/components/D-gate/TechnicalSetup.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Chip,
} from '@mui/material';
import {
  Code,
  Description,
  Storage,
  GitHub,
  Build,
  CheckCircle,
  RadioButtonUnchecked,
  Architecture,
} from '@mui/icons-material';

interface TechnicalSetupProps {
  isSidebarOpen: boolean;
}

const TechnicalSetup: React.FC<TechnicalSetupProps> = ({ isSidebarOpen }) => {
  const requiredRepos = [
    {
      name: 'container',
      description: 'Core container repository for the project.',
    },
    {
      name: 'common-layout',
      description: 'Shared layout repository for consistent design.',
    },
  ];

  const optionalRepos = [
    {
      name: 'c360',
      description: 'Core business logic and components.',
    },
    {
      name: 'User Management',
      description: 'User-related features and services.',
    },
  ];

  const libraries = [
    {
      name: 'Redux',
      description: 'For state management.',
    },
    {
      name: 'Digitinary-UI',
      description: 'Reusable UI components.',
    },
    {
      name: 'Context API',
      description: 'Additional state management for isolated components.',
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
                <Code sx={{ fontSize: 32 }} />
                Step 3: Technical Setup
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
                  This section outlines the technical requirements and setup process for the project.
                  Follow these instructions carefully to ensure a proper development environment setup.
                </Typography>
              </Paper>
            </Grid>

            {/* Required Repositories Section */}
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
                  <GitHub />
                  Required Repositories
                </Typography>
                <List sx={{ ml: 4 }}>
                  {requiredRepos.map((repo) => (
                    <ListItem key={repo.name}>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="subtitle1" color="primary">
                              {repo.name}
                            </Typography>
                            <Chip 
                              label="Required" 
                              size="small" 
                              color="primary" 
                              sx={{ height: 20 }}
                            />
                          </Box>
                        }
                        secondary={repo.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Optional Repositories Section */}
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
                  <Storage />
                  Optional Repositories
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mb: 2 }}>
                  Install based on the module you need:
                </Typography>
                <List sx={{ ml: 4 }}>
                  {optionalRepos.map((repo) => (
                    <ListItem key={repo.name}>
                      <ListItemIcon>
                        <RadioButtonUnchecked color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="subtitle1" color="primary">
                              {repo.name}
                            </Typography>
                            <Chip 
                              label="Optional" 
                              size="small" 
                              variant="outlined" 
                              color="primary"
                              sx={{ height: 20 }}
                            />
                          </Box>
                        }
                        secondary={repo.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Libraries Section */}
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
                  <Build />
                  Libraries and Tools
                </Typography>
                <List sx={{ ml: 4 }}>
                  {libraries.map((lib) => (
                    <ListItem key={lib.name}>
                      <ListItemIcon>
                        <Architecture color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" color="primary">
                            {lib.name}
                          </Typography>
                        }
                        secondary={lib.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TechnicalSetup;