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
// ///
// import React, { useState } from "react";
// import Stack from "@/components/ui/stack";
// import { AlertCircle, UserPlus, Settings, Video, Check } from "lucide-react";

// // ColorlibStepIcon component
// const ColorlibStepIcon = ({ step, isActive, isCompleted }) => {
//   const icons = {
//     1: <Settings className="w-6 h-6 text-white" />,
//     2: <UserPlus className="w-6 h-6 text-white" />,
//     3: <Video className="w-6 h-6 text-white" />,
//     4: <AlertCircle className="w-6 h-6 text-white" />,
//     5: <Check className="w-6 h-6 text-white" />,
//   };

//   return (
//     <div
//       className={`
//       w-12 h-12
//       flex items-center justify-center
//       rounded-full
//       z-10
//       ${
//         isActive || isCompleted
//           ? "bg-gradient-to-r from-[rgb(242,113,33)] via-[rgb(233,64,87)] to-[rgb(138,35,135)]"
//           : "bg-gray-400"
//       }
//       ${isActive ? "shadow-lg" : ""}
//     `}
//     >
//       {icons[step]}
//     </div>
//   );
// };

// const ColorlibConnector = ({ isActive, isCompleted }) => (
//   <div
//     className={`
//     h-1 flex-1 mx-2
//     ${
//       isActive || isCompleted
//         ? "bg-gradient-to-r from-[rgb(242,113,33)] via-[rgb(233,64,87)] to-[rgb(138,35,135)]"
//         : "bg-gray-200"
//     }
//     rounded
//   `}
//   />
// );

// const CustomizedSteppers = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     "Select campaign settings",
//     "Create an ad group",
//     "Create an ad",
//     "Preview campaign",
//     "Launch campaign",
//   ];

//   const handleNext = () => {
//     setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
//   };

//   const handleBack = () => {
//     setActiveStep((prev) => Math.max(0, prev - 1));
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       <div className="flex items-center justify-between w-full">
//         {steps.map((label, index) => (
//           <React.Fragment key={label}>
//             <div className="flex flex-col items-center">
//               <ColorlibStepIcon
//                 step={index + 1}
//                 isActive={index === activeStep}
//                 isCompleted={index < activeStep}
//               />
//               <span className="mt-2 text-sm text-center max-w-[120px]">
//                 {label}
//               </span>
//             </div>
//             {index < steps.length - 1 && (
//               <ColorlibConnector
//                 isActive={index < activeStep}
//                 isCompleted={index < activeStep}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       <div className="mt-8 flex justify-between">
//         <button
//           onClick={handleBack}
//           disabled={activeStep === 0}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Back
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-purple-600 text-white rounded"
//         >
//           {activeStep === steps.length - 1 ? "Finish" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomizedSteppers;
//////////


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
//   activeStep: number;
//   onStepChange: (step: number) => void;
// }

// const ProgressStepper: React.FC<ProgressStepperProps> = ({ 
//   steps, 
//   activeStep,
//   onStepChange 
// }) => {
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
//     onStepChange(activeStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     onStepChange(activeStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }
//     onStepChange(activeStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     onStepChange(0);
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
////

// src/components/ProgressStepper/ProgressStepper.tsx
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepValidation from "../Arena/StepValidation";
import "./ProgressStepper.scss";

interface ProgressStepperProps {
  steps: {
    title: string;
    id: string;
    optional?: boolean;
  }[];
  activeStep: number;
  onStepChange: (step: number) => void;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ 
  steps, 
  activeStep,
  onStepChange 
}) => {
  const navigate = useNavigate();
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [showValidation, setShowValidation] = React.useState(false);

  const isStepOptional = (step: number) => {
    return steps[step]?.optional || false;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // If it's the last step, navigate to home page
      navigate('/');
    } else {
      setShowValidation(true);
    }
  };

  const handleBack = () => {
    onStepChange(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    onStepChange(activeStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    onStepChange(0);
    setSkipped(new Set<number>());
  };

  const handleValidationComplete = (success: boolean) => {
    if (success) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      onStepChange(activeStep + 1);
      setSkipped(newSkipped);
    }
    setShowValidation(false);
  };

  return (
    <Box className="progress-stepper-container">
      <Stepper activeStep={activeStep} className="stepper">
        {steps.map(({ title, optional }, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (optional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={title} {...stepProps}>
              <StepLabel {...labelProps}>{title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div className="stepper-content">
        {activeStep === steps.length ? (
          <>
            <Typography className="step-text">
              All steps completed - you're finished
            </Typography>
            <Box className="button-container">
              <Box className="spacer" />
              <Button onClick={() => navigate('/')} variant="contained">
                Go to Home
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box className="button-container">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                className="back-button"
              >
                Back
              </Button>
              <Box className="spacer" />
              {isStepOptional(activeStep) && (
                <Button
                  color="inherit"
                  onClick={handleSkip}
                  className="skip-button"
                >
                  Skip
                </Button>
              )}
              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </div>

      <StepValidation
        open={showValidation}
        onClose={() => setShowValidation(false)}
        onValidationComplete={handleValidationComplete}
        currentStep={activeStep}
      />
    </Box>
  );
};

export default ProgressStepper;