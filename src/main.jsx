import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Eslatma: App komponentini chaqirishni unutmang
import './index.css';
import './i18n';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
);
