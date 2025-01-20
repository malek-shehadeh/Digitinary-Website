

import React from 'react';
import MainContent from './MainContent';
import './DeploymentProcess.scss';

interface DeploymentProcessProps {
  isSidebarOpen: boolean;
}

const DeploymentProcess: React.FC<DeploymentProcessProps> = ({ isSidebarOpen }) => {
  return (
    <div className="content-area">
      <div className={`deployment-process ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <MainContent />
      </div>
    </div>
  );
};

export default DeploymentProcess;