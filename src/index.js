import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import AppContext from './containers/AppContext';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('app')
);
