//src/theme/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Define theme variables that will change with mode
export const getThemeTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
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
    background: {
      default: mode === 'light' ? '#ffffff' : '#1a1a1a',
      paper: mode === 'light' ? '#f8f9fa' : '#2d2d2d',
    },
    text: {
      primary: mode === 'light' ? '#333333' : '#ffffff',
      secondary: mode === 'light' ? '#666666' : '#b3b3b3',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

// SCSS variables for both themes
export const getCssVariables = (theme: Theme) => {
  const mode = theme.palette.mode;
  return {
    '--primary-color': theme.palette.primary.main,
    '--secondary-color': theme.palette.secondary.main,
    '--background-color': theme.palette.background.default,
    '--paper-background': theme.palette.background.paper,
    '--text-color': theme.palette.text.primary,
    '--text-secondary': theme.palette.text.secondary,
    '--border-color': mode === 'light' ? '#e5e5e5' : '#404040',
    '--hover-bg': mode === 'light' ? '#f5f5f5' : '#3d3d3d',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  } as React.CSSProperties;
};

export const createAppTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    ...getThemeTokens(mode),
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      h1: { fontWeight: 600 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
  });
};