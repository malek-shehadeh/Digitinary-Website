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
////

// src/components/D-gate/D-gate.tsx
import React from "react";
import ProgressStepper from "../ProgressStepper/ProgressStepper";

const DGatePage: React.FC = () => {
  const steps = [
    { title: "Step 1: Initialize", id: "step1" },
    { title: "Step 2: Configure", id: "step2", optional: true },
    { title: "Step 3: Verify", id: "step3" },
    { title: "Step 4: Deploy", id: "step4" },
    { title: "Step 5: Complete", id: "step5" },
  ];

  return (
    <div className="dgate-page">
      <h1>D-Gate Configuration</h1>
      <ProgressStepper steps={steps} />
    </div>
  );
};

export default DGatePage;
