import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/app/App.js';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

