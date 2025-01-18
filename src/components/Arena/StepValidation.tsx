


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