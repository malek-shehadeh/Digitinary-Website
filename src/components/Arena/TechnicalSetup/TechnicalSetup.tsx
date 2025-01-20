import React from 'react';
import { Box } from '@mui/material';
import MainContent from './MainContent';
import './TechnicalSetup.scss';

const TechnicalSetup: React.FC = () => {
  return (
    <Box className="technical-setup">
      <MainContent />
    </Box>
  );
};

export default TechnicalSetup;