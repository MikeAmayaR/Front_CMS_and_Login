import React, { useState } from "react";
import "../../scss/login.scss";
import { Logging } from "./events";

function Login() {
  const [dataEmail, setEmail] = useState("");
  const [dataPassword, setPassword] = useState("");

  return (
    <div className="form-position">
      <div className="section-form">
        <div className="form-content">
          <Logging
            dataEmail={dataEmail}
            setEmail={setEmail}
            dataPassword={dataPassword}
            setPassword={setPassword}
          />
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export { Login };
