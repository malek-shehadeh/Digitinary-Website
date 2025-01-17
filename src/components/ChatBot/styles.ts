//src/components/ChatBot/styles.ts
import { Theme } from '@mui/material/styles';

export const chatStyles = (theme: Theme) => ({
  chatContainer: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
  chatOpen: {
    width: '380px !important',
    height: '600px !important',
  },
  chatHeader: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'linear-gradient(135deg, #4068df 0%, #42c9c2 100%)',
    padding: theme.spacing(2),
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: theme.spacing(0.5),
      borderRadius: '50%',
    },
  },
  closeButton: {
    color: 'white',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  messagesContainer: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing(2),
    backgroundColor: '#f8f9fa',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#c1c1c1',
      borderRadius: '3px',
      '&:hover': {
        background: '#a8a8a8',
      },
    },
  },
  fabButton: {
    background: 'linear-gradient(135deg, #4068df 0%, #42c9c2 100%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(135deg, #3557c0 0%, #3ab3ac 100%)',
    },
  },
  messageBox: {
    maxWidth: '75%',
    borderRadius: '16px',
    padding: theme.spacing(1.5, 2),
    marginBottom: theme.spacing(1),
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  botMessage: {
    backgroundColor: 'white',
    borderTopLeftRadius: '4px',
  },
  userMessage: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderTopRightRadius: '4px',
  },
  quickReplies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  quickReplyChip: {
    background: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      background: theme.palette.primary.main,
      color: 'white',
    },
    transition: 'all 0.2s ease-in-out',
  },
  inputContainer: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      backgroundColor: '#f8f9fa',
      '&:hover': {
        backgroundColor: '#f3f4f6',
      },
      '&.Mui-focused': {
        backgroundColor: 'white',
        '& > fieldset': {
          borderColor: theme.palette.primary.main,
          borderWidth: '1px',
        },
      },
    },
  },
  sendButton: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
      transform: 'scale(1.1)',
    },
    transition: 'all 0.2s ease-in-out',
  },
});
////////////////

