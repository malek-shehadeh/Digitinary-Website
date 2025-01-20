import React from 'react';
import { Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface SectionHeaderProps {
  icon: SvgIconComponent;
  title: string;
  variant?: "h4" | "h6";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title, variant = "h6" }) => (
  <Typography
    variant={variant}
    component={variant === "h4" ? "h2" : "h3"}
    gutterBottom
    color="primary"
    className={`section-header ${variant}`}
  >
    <Icon sx={{ fontSize: variant === "h4" ? 32 : 24 }} />
    {title}
  </Typography>
);

export default SectionHeader;