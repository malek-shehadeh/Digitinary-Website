
import React from 'react';
import { Paper, Typography } from '@mui/material';
import SectionHeader from './SectionHeader';
import { SvgIconComponent } from '@mui/icons-material'; 

interface SectionContentProps {
  icon: SvgIconComponent; 
  title: string;
  content?: string;
  children?: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({
  icon,
  title,
  content,
  children,
}) => (
  <Paper elevation={3} className="section-paper">
    <SectionHeader icon={icon} title={title} />
    {content && (
      <Typography variant="body1" className="section-content">
        {content}
      </Typography>
    )}
    {children}
  </Paper>
);

export default SectionContent;