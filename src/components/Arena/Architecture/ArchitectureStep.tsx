//src/components/Arena/Architecture/ArchitectureStep.tsx
import React from 'react';
import { Box } from '@mui/material';
import MicroFrontend from './MicroFrontend';
import DigitinaryUI from './DigitinaryUI';
import './Architecture.scss';

const ArchitectureStep: React.FC = () => {
  return (
    <Box className="architecture-container">
      <MicroFrontend />
      <DigitinaryUI />
    </Box>
  );
};

export default ArchitectureStep;