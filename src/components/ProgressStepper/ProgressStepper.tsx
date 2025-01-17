// import React, { useState } from "react";
// import "./ProgressStepper.scss";
// import { Step } from "../../types/stepper"; // Import only Step, remove StepStatus since we're not using it directly

// interface ProgressStepperProps {
//   initialSteps: Step[];
// }

// const ProgressStepper: React.FC<ProgressStepperProps> = ({ initialSteps }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [steps, setSteps] = useState(
//     initialSteps.map((step, index) => ({
//       ...step,
//       status: index === 0 ? "current" : "pending", // Ensure this matches the Step["status"] type
//     }))
//   );

//   const updateSteps = (newCurrentStep: number) => {
//     setSteps(
//       steps.map((step, index) => ({
//         ...step,
//         status:
//           index < newCurrentStep
//             ? "success"
//             : index === newCurrentStep
//             ? "current"
//             : "pending",
//       }))
//     );
//   };

//   const onStepForward = () => {
//     const next = currentStep + 1;
//     if (next < steps.length) {
//       setCurrentStep(next);
//       updateSteps(next);
//     }
//   };

//   const onStepBack = () => {
//     const prev = currentStep - 1;
//     if (prev >= 0) {
//       setCurrentStep(prev);
//       updateSteps(prev);
//     }
//   };

//   const getStepIcon = (status: Step["status"]) => {
//     switch (status) {
//       case "success":
//         return <i className="fas fa-check-circle" aria-hidden="true" />;
//       case "danger":
//         return <i className="fas fa-exclamation-circle" aria-hidden="true" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="stepper-container">
//       <div className="stepper-controls">
//         <button
//           onClick={onStepBack}
//           disabled={currentStep === 0}
//           className="stepper-button"
//         >
//           Step Back
//         </button>
//         <button
//           onClick={onStepForward}
//           disabled={currentStep === steps.length - 1}
//           className="stepper-button"
//         >
//           Step Forward
//         </button>
//       </div>

//       <div className="screen-reader" aria-live="polite">
//         {steps[currentStep] && `On ${steps[currentStep].title}.`}
//         {steps[currentStep - 1] &&
//           `${steps[currentStep - 1].title} was successful.`}
//       </div>

//       <ol className="pf-v6-c-progress-stepper" role="list">
//         {steps.map((step, _) => (
//           <li
//             key={step.id}
//             className={`pf-v6-c-progress-stepper__step ${
//               step.status === "current" ? "pf-m-current" : ""
//             } ${step.status ? `pf-m-${step.status}` : ""}`}
//             role="listitem"
//             aria-label={`${
//               step.status === "current"
//                 ? "current step"
//                 : step.status === "success"
//                 ? "completed step, step with success"
//                 : "pending step"
//             }`}
//           >
//             <div className="pf-v6-c-progress-stepper__step-connector">
//               <span className="pf-v6-c-progress-stepper__step-icon">
//                 {getStepIcon(step.status)}
//               </span>
//             </div>
//             <div className="pf-v6-c-progress-stepper__step-main">
//               <div className="pf-v6-c-progress-stepper__step-title">
//                 {step.title}
//               </div>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default ProgressStepper;
////

// // src/components/ProgressStepper/ProgressStepper.tsx
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import "./ProgressStepper.scss";

// interface ProgressStepperProps {
//   steps: {
//     title: string;
//     id: string;
//     optional?: boolean;
//   }[];
// }

// const ProgressStepper: React.FC<ProgressStepperProps> = ({ steps }) => {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set<number>());

//   const isStepOptional = (step: number) => {
//     return steps[step]?.optional || false;
//   };

//   const isStepSkipped = (step: number) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setSkipped(new Set<number>());
//   };

//   return (
//     <Box className="progress-stepper-container">
//       <Stepper activeStep={activeStep} className="stepper">
//         {steps.map(({ title, optional }, index) => {
//           const stepProps: { completed?: boolean } = {};
//           const labelProps: { optional?: React.ReactNode } = {};

//           if (optional) {
//             labelProps.optional = (
//               <Typography variant="caption">Optional</Typography>
//             );
//           }

//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }

//           return (
//             <Step key={title} {...stepProps}>
//               <StepLabel {...labelProps}>{title}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       <div className="stepper-content">
//         {activeStep === steps.length ? (
//           <>
//             <Typography className="step-text">
//               All steps completed - you're finished
//             </Typography>
//             <Box className="button-container">
//               <Box className="spacer" />
//               <Button onClick={handleReset} variant="contained">
//                 Reset
//               </Button>
//             </Box>
//           </>
//         ) : (
//           <>
//             <Typography className="step-text">Step {activeStep + 1}</Typography>
//             <Box className="button-container">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className="back-button"
//               >
//                 Back
//               </Button>
//               <Box className="spacer" />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   className="skip-button"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button onClick={handleNext} variant="contained">
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </Box>
//           </>
//         )}
//       </div>
//     </Box>
//   );
// };

// export default ProgressStepper;
