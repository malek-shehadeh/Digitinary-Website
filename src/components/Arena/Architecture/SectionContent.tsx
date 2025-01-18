//src/components/Arena/Architecture/SectionContent.tsx
import React from 'react';
import { Paper, Typography, Box, List } from '@mui/material';
import SectionHeader from './SectionHeader';

interface SectionContentProps {
  icon: any;
  title: string;
  content?: string;
  children?: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({
  icon,
  title,
  content,
  children
}) => (
  <Paper 
    elevation={3} 
    className="section-paper"
  >
    <SectionHeader icon={icon} title={title} />
    {content && (
      <Typography 
        variant="body1" 
        className="section-content"
      >
        {content}
      </Typography>
    )}
    {children}
  </Paper>
);

export default SectionContent;