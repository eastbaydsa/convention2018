import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToSectionWithRouter from "./components/routing/ScrollToSection";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';

require("smoothscroll-polyfill").polyfill();

ReactDOM.render(
  <Router>
    <ScrollToSectionWithRouter>
      <App />
    </ScrollToSectionWithRouter>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
