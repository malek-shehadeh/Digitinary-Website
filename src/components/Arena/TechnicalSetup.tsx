// src/components/Arena/TechnicalSetup.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Chip,
  useTheme,
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

const TechnicalSetup: React.FC = () => {
  const theme = useTheme();

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
                <Code sx={{ fontSize: 32 }} />
                Step 3: Technical Setup
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
                This section outlines the technical requirements and setup process for the project.
                Follow these instructions carefully to ensure a proper development environment setup.
              </Typography>
            </Paper>

            {/* Required Repositories Section */}
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
                            sx={{ 
                              height: 20,
                              bgcolor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.main',
                              color: 'white',
                            }}
                          />
                        </Box>
                      }
                      secondary={
                        <Typography 
                          variant="body2" 
                          sx={{ color: 'text.secondary' }}
                        >
                          {repo.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Optional Repositories Section */}
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
                <Storage />
                Optional Repositories
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  ml: 4, 
                  mb: 2,
                  color: 'text.secondary',
                  transition: 'color 0.3s ease'
                }}
              >
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
                            sx={{ 
                              height: 20,
                              borderColor: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main',
                            }}
                          />
                        </Box>
                      }
                      secondary={
                        <Typography 
                          variant="body2" 
                          sx={{ color: 'text.secondary' }}
                        >
                          {repo.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Libraries Section */}
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
                      secondary={
                        <Typography 
                          variant="body2" 
                          sx={{ color: 'text.secondary' }}
                        >
                          {lib.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TechnicalSetup;