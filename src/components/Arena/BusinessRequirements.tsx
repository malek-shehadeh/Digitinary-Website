// src/components/Arena/BusinessRequirements.tsx
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
  Link,
  useTheme,
} from '@mui/material';
import {
  Business,
  Description,
  LibraryBooks,
  Link as LinkIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

const BusinessRequirements: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 3 }}>
      <Card sx={{ 
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease'
      }}>
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
                <Business sx={{ fontSize: 32 }} />
                Step 2: Business Requirements
              </Typography>
            </Grid>

            {/* Overview Section */}
            <Grid item xs={12}>
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
                  A comprehensive description of the key business requirements and objectives for the project.
                  These requirements form the foundation of our development process and ensure alignment with
                  business goals and stakeholder expectations.
                </Typography>
              </Paper>
            </Grid>

            {/* Resources Section */}
            <Grid item xs={12}>
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
                  <LibraryBooks />
                  Resources
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
                  Refer to the following links for more detailed information about our business requirements:
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: 'primary.light',
                            }
                          }}
                        >
                          Business Docs Link 1
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: 'primary.light',
                            }
                          }}
                        >
                          Business Docs Link 2
                        </Link>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Additional Information Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#e0e0e0',
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                transition: 'all 0.3s ease'
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'text.secondary',
                    transition: 'color 0.3s ease'
                  }}
                >
                  <InfoIcon color="primary" fontSize="small" />
                  For more detailed information about specific business requirements or to request access to additional
                  documentation, please contact the business analysis team.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BusinessRequirements;