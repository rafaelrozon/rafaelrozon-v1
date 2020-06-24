import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export default ({ element }) => {
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
