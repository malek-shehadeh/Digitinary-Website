import { useContext } from 'react';
import { ThemeContext } from './ThemeContextLogic';

export const useTheme = () => useContext(ThemeContext);