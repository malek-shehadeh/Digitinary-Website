

// src/components/Arena/ArchitectureStep.tsx
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
  Link,
  useTheme,
} from '@mui/material';
import {
  Architecture,
  Article,
  LibraryBooks,
  Link as LinkIcon,
} from '@mui/icons-material';

const ArchitectureStep: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 3 }}>
      {/* Micro Frontend Section */}
      <Card sx={{ 
        mb: 4, 
        bgcolor: 'background.paper',
        transition: 'background-color 0.3s ease'
      }}>
        <CardContent>
          <Box sx={{ display: 'grid', gap: 3 }}>
            {/* Title */}
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
                  gap: 2,
                }}
              >
                <Architecture sx={{ fontSize: 32 }} />
                Step 1: Architecture - Micro Frontend
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
                  gap: 1,
                }}
              >
                <Article />
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
                A micro-frontend architecture enables independent teams to work on specific modules,
                ensuring scalability and modularity. This approach allows for better management of
                large-scale applications while maintaining code quality and team autonomy.
              </Typography>
            </Paper>

            {/* Resources Section */}
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
                }}
              >
                <LibraryBooks />
                Resources
              </Typography>
              <List sx={{ ml: 4 }}>
                <ListItem>
                  <ListItemIcon>
                    <LinkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link 
                        href="#" 
                        sx={{ 
                          color: 'primary.main',
                          '&:hover': {
                            color: 'primary.light'
                          },
                          transition: 'color 0.3s ease'
                        }}
                      >
                        Micro Frontend Overview
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LinkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link 
                        href="#" 
                        sx={{ 
                          color: 'primary.main',
                          '&:hover': {
                            color: 'primary.light'
                          },
                          transition: 'color 0.3s ease'
                        }}
                      >
                        Detailed Architecture
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Paper>

            {/* Structure Section */}
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
                }}
              >
                <Architecture />
                Structure
              </Typography>
              <Box
                sx={{
                  ml: 4,
                  mt: 2,
                  width: '100%',
                  maxWidth: 600,
                  height: 300,
                  bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                  transition: 'background-color 0.3s ease'
                }}
              >
                <img
                  src="/api/placeholder/600/300"
                  alt="Architecture Diagram"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Paper>
          </Box>
        </CardContent>
      </Card>

      {/* Digitinary-UI Section */}
      <Card sx={{ 
        bgcolor: 'background.paper',
        transition: 'background-color 0.3s ease'
      }}>
        <CardContent>
          <Box sx={{ display: 'grid', gap: 3 }}>
            {/* Title */}
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
                  gap: 2,
                }}
              >
                <LibraryBooks sx={{ fontSize: 32 }} />
                Digitinary-UI
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
                  gap: 1,
                }}
              >
                <Article />
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
                A comprehensive UI library designed to maintain consistency across all modules with
                reusable components and styling. This ensures a unified look and feel across the
                entire application while promoting code reuse and maintainability.
              </Typography>
            </Paper>

            {/* Resources Section */}
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
                }}
              >
                <LibraryBooks />
                Resources
              </Typography>
              <List sx={{ ml: 4 }}>
                <ListItem>
                  <ListItemIcon>
                    <LinkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link 
                        href="#" 
                        sx={{ 
                          color: 'primary.main',
                          '&:hover': {
                            color: 'primary.light'
                          },
                          transition: 'color 0.3s ease'
                        }}
                      >
                        Digitinary-UI Documentation
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArchitectureStep;