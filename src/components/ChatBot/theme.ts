
//src/components/ChatBot/theme.ts
import { createTheme } from '@mui/material/styles';

export const chatbotTheme = createTheme({
  palette: {
    primary: {
      main: '#4068df',
      light: '#6b8fe6',
      dark: '#2c49b3',
    },
    secondary: {
      main: '#42c9c2',
      light: '#6ad4cf',
      dark: '#2e8d88',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h6: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '0.95rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.85rem',
        },
      },
    },
  },
});