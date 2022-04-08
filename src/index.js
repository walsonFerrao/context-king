import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Logincontextprovider} from './Contextapis/Registrationcontext'

ReactDOM.render(
  <React.StrictMode>
    <Logincontextprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Logincontextprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
