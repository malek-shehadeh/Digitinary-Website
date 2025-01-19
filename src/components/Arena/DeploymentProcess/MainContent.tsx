

///


import React from 'react';
import { 
  Card, 
  CardContent, 
  Paper, 
  Box, 
  Typography,
  useTheme 
} from '@mui/material';
import {
  Rocket,
  Description,
  Timeline,
} from '@mui/icons-material';
import SectionHeader from '../BusinessRequirements/SectionHeader';
import EnvironmentCards from './EnvironmentCards';
import ProcessStepper from './ProcessStepper';

const MainContent: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card className="main-card">
      <CardContent>
        <Box className="content-container">
          {/* Main Title */}
          <Box>
            <SectionHeader
              icon={Rocket}
              title="Step 4: Deployment Process"
              variant="h4"
            />
          </Box>

          {/* Overview Section */}
          <Paper className="section-paper">
            <SectionHeader icon={Description} title="Overview" />
            <Typography className="section-description">
              The project has three deployment environments, each with specific purposes:
            </Typography>
            <EnvironmentCards isDark={isDark} />
          </Paper>

          {/* Flow Diagram Section */}
          <Paper className="section-paper">
            <SectionHeader icon={Timeline} title="Deployment Flow" />
            <Box className="diagram-container">
              <img
                src="/image (1).png"
                alt="Deployment Flow"
                className="flow-diagram"
              />
            </Box>

            
          </Paper>

          {/* Process Stepper Section */}
          <Paper className="section-paper">
            <ProcessStepper isDark={isDark} />
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainContent;