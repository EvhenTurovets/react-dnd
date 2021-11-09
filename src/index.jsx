import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from 'src/styles/globalStyles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'src/components/app';
import store from 'src/store/store';

render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Router basename="/react-dnd">
        <App />
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);
