import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import '@assets/libs/boxicons-2.0.9/css/boxicons.min.css';
import '@assets/css/imports.css';
import '@assets/css/theme.css';
import 'react-perfect-scrollbar/dist/css/styles.min.css';

import { App } from './App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
