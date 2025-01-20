


import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { DeveloperMode, BugReport, Visibility } from '@mui/icons-material';
import { environments } from './data';

interface EnvironmentCardsProps {
  isDark: boolean;
}

const iconMap = {
  DeveloperMode,
  BugReport,
  Visibility,
};

const EnvironmentCards: React.FC<EnvironmentCardsProps> = ({ isDark }) => (
  <Box className="environment-grid">
    {environments.map((env) => {
      const Icon = iconMap[env.icon as keyof typeof iconMap];
      const color = isDark ? env.color.dark : env.color.light;
      
      return (
        <Paper
          key={env.name}
          className="environment-card"
          style={{ borderLeftColor: color }}
        >
          <Box className="environment-header">
            <Icon sx={{ color }} />
            <Typography variant="h6" color="primary">
              {env.name}
            </Typography>
          </Box>
          <Typography className="environment-description">
            {env.description}
          </Typography>
        </Paper>
      );
    })}
  </Box>
);

export default EnvironmentCards;