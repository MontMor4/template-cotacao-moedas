import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ThemeContextParent from './contexts/context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextParent>
      <App />
    </ThemeContextParent>
  </React.StrictMode>,
  document.getElementById('root'),
);
