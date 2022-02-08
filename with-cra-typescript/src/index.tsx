import React from "react";
import ReactDOM from "react-dom";
import {
  CustomThemeProvider,
  ToastProvider,
} from "react-martins-component-library";
import App from "./App";
import "./index.css";
import { theme } from "./lib/theme";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider theme={theme}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
