import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import EventHandling from './EventHandling'
// import States from './States';
import Props from './Props';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <EventHandling /> */}
    {/* <States/> */}
    <Props />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
