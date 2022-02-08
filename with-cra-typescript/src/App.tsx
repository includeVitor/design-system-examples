import React from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { useAppTheme } from "./lib/theme";
function App() {
  const theme = useAppTheme();

  return (
    <div className="container">
      <div className="main">
        <h1 style={{ fontWeight: theme.fontWeight.big }}>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
