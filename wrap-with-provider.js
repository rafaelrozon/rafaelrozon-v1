import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './src/styles/global-styles';

import theme from './src/styles/theme';

export default ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {element}
        </ThemeProvider>
    );
};
