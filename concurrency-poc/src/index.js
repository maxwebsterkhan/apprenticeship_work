import React from 'react';
import { render } from 'react-dom';
import { ContentProvider, nhseTheme, ThemeProvider } from 'ngis-application-kit';
import App from './App.js'


render(
  <ThemeProvider theme={nhseTheme} renderGlobalStyles={true}>
    <ContentProvider>
      <App />
    </ContentProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
