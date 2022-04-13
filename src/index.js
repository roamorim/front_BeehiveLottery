import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';


ReactDOM.render(
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </html>,
  document.getElementById('root')
);


