import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NumberProvider from './contexts/numberContext';

ReactDOM.render(
  <React.StrictMode>
    <NumberProvider>
      <App />
    </NumberProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

