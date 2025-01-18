//src/components/Arena/CustomModule/CustomModule.tsx
import React from 'react';
// import { Box } from '@mui/material';
import MainContent from './MainContent';
import './CustomModule.scss';

interface CustomModuleProps {
  isSidebarOpen: boolean;
}

const CustomModule: React.FC<CustomModuleProps> = ({ isSidebarOpen }) => {
  return (
    <div className="content-area">
      <div className={`custom-module ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <MainContent />
      </div>
    </div>
  );
};

export default CustomModule;