


import * as React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  fullWidth?: boolean; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "primary",
  onClick,
  disabled = false,
  className = "",
  children,
  variant = "contained",
  fullWidth = false, 
}) => {
  return (
    <Button
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
      fullWidth={fullWidth} 
    >
      {children}
    </Button>
  );
};

export default CustomButton; 
