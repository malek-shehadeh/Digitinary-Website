// // src/components/D-gate/StepValidation.tsx
// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   Typography,
//   Box,
//   Alert,
// } from '@mui/material';
// import { QuizOutlined } from '@mui/icons-material';

// interface StepValidationProps {
//   open: boolean;
//   onClose: () => void;
//   onValidationComplete: (success: boolean) => void;
//   currentStep: number;
// }

// const StepValidation: React.FC<StepValidationProps> = ({
//   open,
//   onClose,
//   onValidationComplete,
//   currentStep,
// }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState<string>('');
//   const [showError, setShowError] = useState(false);

//   // Step-specific questions and answers
//   const questionsByStep = {
//     0: {
//       question: "What is the main advantage of micro-frontend architecture?",
//       options: [
//         "Independent teams can work on specific modules",
//         "It requires more server resources",
//         "It makes the application slower",
//         "It requires more documentation"
//       ],
//       correctAnswer: "Independent teams can work on specific modules"
//     },
//     1: {
//       question: "What is the primary purpose of Business Requirements?",
//       options: [
//         "To make the application look better",
//         "To define key objectives and goals",
//         "To write more code",
//         "To deploy faster"
//       ],
//       correctAnswer: "To define key objectives and goals"
//     },
//     2: {
//       question: "Which repository is required for the core container?",
//       options: [
//         "user-management",
//         "common-layout",
//         "container",
//         "c360"
//       ],
//       correctAnswer: "container"
//     },
//     3: {
//       question: "Which environment is used for QA team verification?",
//       options: [
//         "Production",
//         "Develop",
//         "Test",
//         "Staging"
//       ],
//       correctAnswer: "Test"
//     },
//     4: {
//       question: "What is the first step in creating a custom module?",
//       options: [
//         "Import the module",
//         "Configure the module",
//         "Generate the module",
//         "Add components"
//       ],
//       correctAnswer: "Generate the module"
//     }
//   };

//   const currentQuestion = questionsByStep[currentStep as keyof typeof questionsByStep];

//   const handleSubmit = () => {
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       onValidationComplete(true);
//       setSelectedAnswer('');
//       setShowError(false);
//     } else {
//       setShowError(true);
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{
//         sx: {
//           borderRadius: 2,
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <DialogTitle sx={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         gap: 1,
//         backgroundColor: '#f8f9fa',
//         borderBottom: '1px solid #e0e0e0'
//       }}>
//         <QuizOutlined color="primary" />
//         <Typography variant="h6" component="span">
//           Step {currentStep + 1} Validation
//         </Typography>
//       </DialogTitle>
      
//       <DialogContent sx={{ mt: 2 }}>
//         <Typography variant="body1" color="text.primary" gutterBottom>
//           {currentQuestion.question}
//         </Typography>
        
//         <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
//           <RadioGroup
//             value={selectedAnswer}
//             onChange={(e) => setSelectedAnswer(e.target.value)}
//           >
//             {currentQuestion.options.map((option, index) => (
//               <FormControlLabel
//                 key={index}
//                 value={option}
//                 control={<Radio />}
//                 label={option}
//                 sx={{
//                   mb: 1,
//                   p: 1,
//                   borderRadius: 1,
//                   '&:hover': {
//                     backgroundColor: '#f5f5f5',
//                   }
//                 }}
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>

//         {showError && (
//           <Alert severity="error" sx={{ mt: 2 }}>
//             Incorrect answer. Please try again.
//           </Alert>
//         )}
//       </DialogContent>

//       <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
//         <Button onClick={onClose} color="inherit">
//           Cancel
//         </Button>
//         <Button 
//           onClick={handleSubmit}
//           variant="contained"
//           disabled={!selectedAnswer}
//         >
//           Submit Answer
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default StepValidation;

////


// // src/components/D-gate/StepValidation.tsx
// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   Typography,
//   Box,
//   Alert,
// } from '@mui/material';
// import { QuizOutlined } from '@mui/icons-material';

// interface StepValidationProps {
//   open: boolean;
//   onClose: () => void;
//   onValidationComplete: (success: boolean) => void;
//   currentStep: number;
// }

// const StepValidation: React.FC<StepValidationProps> = ({
//   open,
//   onClose,
//   onValidationComplete,
//   currentStep,
// }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState<string>('');
//   const [showError, setShowError] = useState(false);
//   const [attemptCount, setAttemptCount] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   // Reset states when dialog opens
//   useEffect(() => {
//     if (open) {
//       setSelectedAnswer('');
//       setShowError(false);
//       setAttemptCount(0);
//       setCurrentQuestionIndex(0);
//     }
//   }, [open]);

//   // Multiple questions for each step
//   const questionsByStep = {
//     0: [
//       {
//         question: "What is the main advantage of micro-frontend architecture?",
//         options: [
//           "Independent teams can work on specific modules",
//           "It requires more server resources",
//           "It makes the application slower",
//           "It requires more documentation"
//         ],
//         correctAnswer: "Independent teams can work on specific modules"
//       },
//       {
//         question: "Which best describes micro-frontend architecture?",
//         options: [
//           "A monolithic application structure",
//           "A way to split applications into smaller, manageable pieces",
//           "A database design pattern",
//           "A testing framework"
//         ],
//         correctAnswer: "A way to split applications into smaller, manageable pieces"
//       }
//     ],
//     1: [
//       {
//         question: "What is the primary purpose of Business Requirements?",
//         options: [
//           "To make the application look better",
//           "To define key objectives and goals",
//           "To write more code",
//           "To deploy faster"
//         ],
//         correctAnswer: "To define key objectives and goals"
//       },
//       {
//         question: "Why are Business Requirements important?",
//         options: [
//           "They help with code optimization",
//           "They ensure alignment with business objectives",
//           "They make development faster",
//           "They improve server performance"
//         ],
//         correctAnswer: "They ensure alignment with business objectives"
//       }
//     ],
//     2: [
//       {
//         question: "Which repository is required for the core container?",
//         options: [
//           "user-management",
//           "common-layout",
//           "container",
//           "c360"
//         ],
//         correctAnswer: "container"
//       },
//       {
//         question: "What is the purpose of the common-layout repository?",
//         options: [
//           "To store user data",
//           "To maintain consistent design",
//           "To handle backend logic",
//           "To manage deployments"
//         ],
//         correctAnswer: "To maintain consistent design"
//       }
//     ],
//     3: [
//       {
//         question: "Which environment is used for QA team verification?",
//         options: [
//           "Production",
//           "Develop",
//           "Test",
//           "Staging"
//         ],
//         correctAnswer: "Test"
//       },
//       {
//         question: "What is the purpose of the Staging environment?",
//         options: [
//           "For development work",
//           "For production deployment",
//           "For client reviews",
//           "For unit testing"
//         ],
//         correctAnswer: "For client reviews"
//       }
//     ],
//     4: [
//       {
//         question: "What is the first step in creating a custom module?",
//         options: [
//           "Import the module",
//           "Configure the module",
//           "Generate the module",
//           "Add components"
//         ],
//         correctAnswer: "Generate the module"
//       },
//       {
//         question: "When should you configure the module?",
//         options: [
//           "Before generating it",
//           "After generating but before adding components",
//           "After adding components",
//           "After importing it"
//         ],
//         correctAnswer: "After generating but before adding components"
//       }
//     ]
//   };

//   const getCurrentQuestion = () => {
//     const questions = questionsByStep[currentStep as keyof typeof questionsByStep];
//     return questions[currentQuestionIndex];
//   };

//   const handleSubmit = () => {
//     const currentQuestion = getCurrentQuestion();
    
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       onValidationComplete(true);
//       setSelectedAnswer('');
//       setShowError(false);
//       setAttemptCount(0);
//     } else {
//       const newAttemptCount = attemptCount + 1;
//       setAttemptCount(newAttemptCount);
//       setShowError(true);

//       if (newAttemptCount >= 2) {
//         // Change to second question if available
//         const questions = questionsByStep[currentStep as keyof typeof questionsByStep];
//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//           setAttemptCount(0);
//           setSelectedAnswer('');
//           setShowError(false);
//         }
//       }
//     }
//   };

//   const currentQuestion = getCurrentQuestion();

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{
//         sx: {
//           borderRadius: 2,
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <DialogTitle sx={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         gap: 1,
//         backgroundColor: '#f8f9fa',
//         borderBottom: '1px solid #e0e0e0'
//       }}>
//         <QuizOutlined color="primary" />
//         <Typography variant="h6" component="span">
//           Step {currentStep + 1} Validation
//         </Typography>
//       </DialogTitle>
      
//       <DialogContent sx={{ mt: 2 }}>
//         <Typography variant="body1" color="text.primary" gutterBottom>
//           {currentQuestion.question}
//         </Typography>
        
//         <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
//           <RadioGroup
//             value={selectedAnswer}
//             onChange={(e) => {
//               setSelectedAnswer(e.target.value);
//               setShowError(false);
//             }}
//           >
//             {currentQuestion.options.map((option, index) => (
//               <FormControlLabel
//                 key={index}
//                 value={option}
//                 control={<Radio />}
//                 label={option}
//                 sx={{
//                   mb: 1,
//                   p: 1,
//                   borderRadius: 1,
//                   '&:hover': {
//                     backgroundColor: '#f5f5f5',
//                   }
//                 }}
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>

//         {showError && (
//           <Alert severity="error" sx={{ mt: 2 }}>
//             {attemptCount < 2 ? 
//               `Incorrect answer. You have ${2 - attemptCount} attempt${2 - attemptCount === 1 ? '' : 's'} remaining.` :
//               "Incorrect answer. Trying a different question..."
//             }
//           </Alert>
//         )}
//       </DialogContent>

//       <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
//         <Button onClick={onClose} color="inherit">
//           Cancel
//         </Button>
//         <Button 
//           onClick={handleSubmit}
//           variant="contained"
//           disabled={!selectedAnswer}
//         >
//           Submit Answer
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default StepValidation;

//////


// src/components/D-gate/StepValidation.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Alert,
} from '@mui/material';
import {
  QuizOutlined,
  WarningAmber
} from '@mui/icons-material';

interface WarningDialogProps {
  open: boolean;
  onClose: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionMap {
  [key: number]: Question;
}

const WarningDialog: React.FC<WarningDialogProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        backgroundColor: '#fff3e0',
        color: '#ed6c02'
      }}>
        <WarningAmber color="warning" />
        <Typography variant="h6" component="span">
          Review Required
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2, pb: 3 }}>
        <Typography variant="body1" color="text.secondary">
          Please review the company's rules before submitting the exam.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
        <Button 
          onClick={handleRedirect}
          variant="contained"
          color="warning"
          fullWidth
        >
          Return to Main Page
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface StepValidationProps {
  open: boolean;
  onClose: () => void;
  onValidationComplete: (success: boolean) => void;
  currentStep: number;
}

const StepValidation: React.FC<StepValidationProps> = ({
  open,
  onClose,
  onValidationComplete,
  currentStep,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showError, setShowError] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (open) {
      setSelectedAnswer('');
      setShowError(false);
      setAttemptCount(0);
      setShowWarning(false);
    }
  }, [open]);

  const questionsByStep: QuestionMap = {
    0: {
      question: "What is the main advantage of micro-frontend architecture?",
      options: [
        "Independent teams can work on specific modules",
        "It requires more server resources",
        "It makes the application slower",
        "It requires more documentation"
      ],
      correctAnswer: "Independent teams can work on specific modules"
    },
    1: {
      question: "What is the primary purpose of Business Requirements?",
      options: [
        "To make the application look better",
        "To define key objectives and goals",
        "To write more code",
        "To deploy faster"
      ],
      correctAnswer: "To define key objectives and goals"
    },
    2: {
      question: "Which repository is required for the core container?",
      options: [
        "user-management",
        "common-layout",
        "container",
        "c360"
      ],
      correctAnswer: "container"
    },
    3: {
      question: "Which environment is used for QA team verification?",
      options: [
        "Production",
        "Develop",
        "Test",
        "Staging"
      ],
      correctAnswer: "Test"
    },
    4: {
      question: "What is the first step in creating a custom module?",
      options: [
        "Import the module",
        "Configure the module",
        "Generate the module",
        "Add components"
      ],
      correctAnswer: "Generate the module"
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questionsByStep[currentStep];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      onValidationComplete(true);
      setSelectedAnswer('');
      setShowError(false);
      setAttemptCount(0);
    } else {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      setShowError(true);

      if (newAttemptCount >= 2) {
        setShowWarning(true);
        onClose();
      }
    }
  };

  const currentQuestion = questionsByStep[currentStep];

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <QuizOutlined color="primary" />
          <Typography variant="h6" component="span">
            Step {currentStep + 1} Validation
          </Typography>
        </DialogTitle>
        
        <DialogContent sx={{ mt: 2 }}>
          <Typography variant="body1" color="text.primary" gutterBottom>
            {currentQuestion.question}
          </Typography>
          
          <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
            <RadioGroup
              value={selectedAnswer}
              onChange={(e) => {
                setSelectedAnswer(e.target.value);
                setShowError(false);
              }}
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  sx={{
                    mb: 1,
                    p: 1,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    }
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {showError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Incorrect answer. You have {2 - attemptCount} attempt{2 - attemptCount === 1 ? '' : 's'} remaining.
            </Alert>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            variant="contained"
            disabled={!selectedAnswer}
          >
            Submit Answer
          </Button>
        </DialogActions>
      </Dialog>

      <WarningDialog 
        open={showWarning}
        onClose={() => setShowWarning(false)}
      />
    </>
  );
};

export default StepValidation;