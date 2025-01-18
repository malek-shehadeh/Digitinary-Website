//src/components/Arena/Architecture/SectionHeader.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface SectionHeaderProps {
  icon: SvgIconComponent;
  title: string;
  variant?: "h4" | "h6";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: Icon, 
  title, 
  variant = "h6" 
}) => (
  <Typography
    variant={variant}
    component={variant === "h4" ? "h2" : "h3"}
    gutterBottom
    color="primary"
    sx={{
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: variant === "h4" ? 2 : 1,
    }}
  >
    <Icon sx={{ fontSize: variant === "h4" ? 32 : 24 }} />
    {title}
  </Typography>
);

export default SectionHeader;