/* index.js */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // import the index.css file
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);

reportWebVitals();
