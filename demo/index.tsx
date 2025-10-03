import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { defineComponents } from '@tylertech/forge';

// defineComponents();
import '@tylertech/forge/app-bar';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
