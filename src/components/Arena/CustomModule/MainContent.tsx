//src/components/Arena/CustomModule/MainContent.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Box,
  useTheme,
} from '@mui/material';
import {
  Extension,
  Description,
} from '@mui/icons-material';
import ModuleSteps from './ModuleSteps';

const MainContent: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card className="main-card">
      <CardContent>
        <Box className="content-container">
          {/* Main Title */}
          <Box>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              className="main-title"
            >
              <Extension sx={{ fontSize: 32 }} />
              Step 5: Creating a Custom Module
            </Typography>
          </Box>

          {/* Overview Section */}
          <Paper className="section-paper">
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              className="section-header"
            >
              <Description />
              Overview
            </Typography>
            <Typography className="section-content">
              A step-by-step guide on creating a new custom module using the project's CLI.
              Follow these instructions to create and integrate your module effectively.
            </Typography>
          </Paper>

          {/* Steps Section */}
          <ModuleSteps isDark={isDark} />

          {/* Success Message */}
          <Paper className={`success-message ${isDark ? 'dark' : 'light'}`}>
            <Typography className="success-text">
              Congratulations! You've completed all the steps. Your custom module is now ready for development.
            </Typography>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainContent;