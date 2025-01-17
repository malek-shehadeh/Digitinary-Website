// src/components/D-gate/BusinessRequirements.tsx
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
} from '@mui/material';
import {
  Business,
  Description,
  LibraryBooks,
  Link as LinkIcon,
  Info as InfoIcon, // Added InfoIcon import
} from '@mui/icons-material';

interface BusinessRequirementsProps {
  isSidebarOpen: boolean;
}

const BusinessRequirements: React.FC<BusinessRequirementsProps> = ({ isSidebarOpen }) => {
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
                <Business sx={{ fontSize: 32 }} />
                Step 2: Business Requirements
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
                  A comprehensive description of the key business requirements and objectives for the project.
                  These requirements form the foundation of our development process and ensure alignment with
                  business goals and stakeholder expectations.
                </Typography>
              </Paper>
            </Grid>

            {/* Resources Section */}
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
                  <LibraryBooks />
                  Resources
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mb: 2 }}>
                  Refer to the following links for more detailed information about our business requirements:
                </Typography>
                <List sx={{ ml: 4 }}>
                  <ListItem>
                    <ListItemIcon>
                      <LinkIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Link href="#" color="primary" sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}>
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
                        <Link href="#" color="primary" sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}>
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
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderLeft: '4px solid #4068df'
              }}>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
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