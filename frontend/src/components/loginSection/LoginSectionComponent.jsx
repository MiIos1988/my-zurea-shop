import React, { useState } from "react";
import { loginUser } from "../../services/auth.service";

const LoginSectionComponent = () => {
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: "",
  });
  //***** Deleted for form validation ****
  // const [validationMsg, setValidationMsg] = useState("");

  const handleSignInObj = (e) => {
    let copySingIn = { ...signInObj };
    copySingIn[e.target.name] = e.target.value;
    setSignInObj(copySingIn);
  };

  const onLoginSubmit = () => {
    //***** Deleted for form validation ****
    if (!signInObj.email && !signInObj.password) {
      return;
    }

    loginUser(signInObj);
  };

  return (
    <div className="loginSection">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="emailBlock row">
          <label className="col-3 text-end me-3" htmlFor="inputEmail">
            Email
          </label>
          <input
            className="col-6 align-self-end"
            type="email"
            name="email"
            onChange={handleSignInObj}
            required
          />
        </div>

        <div className="passwordBlock row">
          <label className="col-3 text-end me-3" htmlFor="inputPass">
            Password
          </label>
          <input
            className="col-6 inputPass "
            type="password"
            name="password"
            onChange={handleSignInObj}
            required
          />
          <button className="col-2  btn passBtn ">SHOW</button>
        </div>
        <div className="forgot text-center">Forgot your password?</div>
        <div className="row justify-content-center">
          <button
            className="col-2  btn btn-dark loginBtn"
            onClick={onLoginSubmit}
          >
            Sing In
          </button>
        </div>
        <hr />
        <div className="createAcc text-center">No account? Create one here</div>
      </form>
    </div>
  );
};

export default LoginSectionComponent;
