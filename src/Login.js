import React from "react";
import Logo from "./loginLogo.png";
import "./Login.css";
import { loginUri } from "./spotify";
function Login() {
  return (
    <div className="Login">
      <img alt="logo" src={Logo} className="Login-Logo" />
      <a href={loginUri} className="Login-Btn-Btn">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
