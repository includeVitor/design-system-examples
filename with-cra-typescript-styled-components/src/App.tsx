import React from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { Title } from "./styles/styles";

function App() {
  return (
    <div className="container">
      <div className="main">
        <Title>Login</Title>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
