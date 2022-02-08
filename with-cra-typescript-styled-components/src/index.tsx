import React from "react";
import ReactDOM from "react-dom";
import {
  CustomThemeProvider,
  ToastProvider,
} from "react-martins-component-library";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import { theme } from "./lib/theme";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CustomThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastProvider>
          <App />
        </ToastProvider>
      </CustomThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
