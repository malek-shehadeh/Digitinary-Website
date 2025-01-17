// src/components/D-gate/ArchitectureStep.tsx
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
  Divider,
  Box,
  Link,
} from '@mui/material';
import {
  Architecture,
  Article,
  LibraryBooks,
  Link as LinkIcon,
} from '@mui/icons-material';

interface ArchitectureStepProps {
  isSidebarOpen: boolean;
}

const ArchitectureStep: React.FC<ArchitectureStepProps> = ({ isSidebarOpen }) => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Micro Frontend Section */}
      <Card sx={{ mb: 4, backgroundColor: '#f8f9fa' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" gutterBottom color="primary" 
                sx={{ 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                <Architecture sx={{ fontSize: 32 }} />
                Step 1: Architecture - Micro Frontend
              </Typography>
            </Grid>
            
            {/* Overview Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography variant="h6" gutterBottom color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                  <Article />
                  Overview
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
                  A micro-frontend architecture enables independent teams to work on specific modules,
                  ensuring scalability and modularity. This approach allows for better management of
                  large-scale applications while maintaining code quality and team autonomy.
                </Typography>
              </Paper>
            </Grid>

            {/* Resources Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography variant="h6" gutterBottom color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
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
                        <Link href="#" color="primary">
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
                        <Link href="#" color="primary">
                          Detailed Architecture
                        </Link>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Structure Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography variant="h6" gutterBottom color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                  <Architecture />
                  Structure
                </Typography>
                <Box sx={{ 
                  ml: 4, 
                  mt: 2, 
                  width: '100%', 
                  maxWidth: 600,
                  height: 300,
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1
                }}>
                  <img 
                    src="/api/placeholder/600/300"
                    alt="Architecture Diagram"
                    style={{ 
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Digitinary-UI Section */}
      <Card sx={{ backgroundColor: '#f8f9fa' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" gutterBottom color="primary"
                sx={{ 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                <LibraryBooks sx={{ fontSize: 32 }} />
                Digitinary-UI
              </Typography>
            </Grid>

            {/* Overview Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography variant="h6" gutterBottom color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                  <Article />
                  Overview
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
                  A comprehensive UI library designed to maintain consistency across all modules with
                  reusable components and styling. This ensures a unified look and feel across the
                  entire application while promoting code reuse and maintainability.
                </Typography>
              </Paper>
            </Grid>

            {/* Resources Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography variant="h6" gutterBottom color="primary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
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
                        <Link href="#" color="primary">
                          Digitinary-UI Documentation
                        </Link>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArchitectureStep;