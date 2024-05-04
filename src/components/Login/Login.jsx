import React from "react";
import "./login.css"

const Login = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "login active" : "login"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "login__content active" : "login__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Login;
