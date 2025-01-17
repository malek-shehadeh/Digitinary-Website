// ////
// import React from "react";
// import ProgressStepper from "../ProgressStepper/ProgressStepper";

// type StepStatus = "pending" | "success" | "current" | "danger" | "info";

// interface Step {
//   title: string;
//   id: string;
//   status: StepStatus;
// }

// const Arena: React.FC = () => {
//   const initialSteps: Step[] = [
//     { title: "First step", id: "step1", status: "pending" as StepStatus },
//     { title: "Second step", id: "step2", status: "pending" as StepStatus },
//     { title: "Third step", id: "step3", status: "pending" as StepStatus },
//     { title: "Fourth step", id: "step4", status: "pending" as StepStatus },
//     { title: "Fifth step", id: "step5", status: "pending" as StepStatus },
//   ];

//   return (
//     <div className="arena-page">
//       <h1>Arena</h1>
//       <ProgressStepper initialSteps={initialSteps} />
//     </div>
//   );
// };

// export default Arena;
// ////
// // src/components/D-gate/D-gate.tsx
// import React from "react";
// import ProgressStepper from "../ProgressStepper/ProgressStepper";
// import VerticalLinearStepper from "../Verticalstepper/Vertical stepper";
// import "./Arena.scss"; // Import the SCSS file for styling

// const DGatePage: React.FC = () => {
//   const steps = [
//     { title: "Step 1: Initialize", id: "step1" },
//     { title: "Step 2: Configure", id: "step2", optional: true },
//     { title: "Step 3: Verify", id: "step3" },
//     { title: "Step 4: Deploy", id: "step4" },
//     { title: "Step 5: Complete", id: "step5" },
//   ];

//   return (
//     <div className="dgate-page">
//       <h1>D-Gate Configuration</h1>
//       <div className="stepper-container">
//         <div className="progress-stepper">
//           <ProgressStepper steps={steps} />
//         </div>
//         <div className="vertical-stepper">
//           <VerticalLinearStepper />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DGatePage;
///
// src/components/D-gate/D-gate.tsx
import React, { useState } from "react";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import ArchitectureStep from "./ArchitectureStep";
import BusinessRequirements from "./BusinessRequirements";
import TechnicalSetup from "./TechnicalSetup";
import DeploymentProcess from "./DeploymentProcess";
import CustomModule from "./CustomModule";
import "./Arena.scss";

interface DGatePageProps {
  isSidebarOpen: boolean;
}

const DGatePage: React.FC<DGatePageProps> = ({ isSidebarOpen }) => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { title: "Step 1: Initialize", id: "step1" },
    { title: "Step 2: Configure", id: "step2", optional: true },
    { title: "Step 3: Technical Setup", id: "step3" },
    { title: "Step 4: Deployment", id: "step4" },
    { title: "Step 5: Custom Module", id: "step5" },
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <ArchitectureStep isSidebarOpen={isSidebarOpen} />;
      case 1:
        return <BusinessRequirements isSidebarOpen={isSidebarOpen} />;
      case 2:
        return <TechnicalSetup isSidebarOpen={isSidebarOpen} />;
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
      <h1>D-Gate Configuration</h1>
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

export default DGatePage;