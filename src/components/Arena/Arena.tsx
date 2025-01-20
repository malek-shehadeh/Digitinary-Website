
import React, { useState } from "react";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import ArchitectureStep from "./Architecture/ArchitectureStep";
import BusinessRequirements from "./BusinessRequirements/BusinessRequirements";
import TechnicalSetup from "./TechnicalSetup/TechnicalSetup";
import DeploymentProcess from "./DeploymentProcess/DeploymentProcess";
import CustomModule from "./CustomModule/CustomModule";
import "./Arena.scss";

interface ArenaPageProps {
  isSidebarOpen: boolean;
}

const ArenaPage: React.FC<ArenaPageProps> = ({ isSidebarOpen }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Step 1: Initialize", id: "step1" },
    { title: "Step 2: Configure", id: "step2" },
    { title: "Step 3: Technical Setup", id: "step3" },
    { title: "Step 4: Deployment", id: "step4" },
    { title: "Step 5: Custom Module", id: "step5" },
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <ArchitectureStep />;
      case 1:
        return <BusinessRequirements />;
      case 2:
        return <TechnicalSetup />;
      case 3:
        return <DeploymentProcess isSidebarOpen={isSidebarOpen} />;
      case 4:
        return <CustomModule isSidebarOpen={isSidebarOpen} />;
      default:
        return <div>Step {activeStep + 1} content coming soon...</div>;
    }
  };

  return (
    <div className={`component-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="arena-header">
        <img src="/ArenaLogo.png" alt="Logo" className="arena-logo" />
        <h1>Arena</h1>
      </div>
      <div className="stepper-container">
        <div className="progress-stepper">
          <ProgressStepper
            steps={steps}
            activeStep={activeStep}
            onStepChange={setActiveStep}
          />
        </div>
        <div className="content-area">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default ArenaPage;