import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/ThemeProvider';

const MainProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainProvider;
