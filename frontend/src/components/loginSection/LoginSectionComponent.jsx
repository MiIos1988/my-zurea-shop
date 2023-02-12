import React from "react";

const LoginSectionComponent = () => {
  return (
    <div className="loginSection">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="emailBlock row">
          <label className="col-3 text-end me-3" htmlFor="inputEmail">
            Email
          </label>
          <input className="col-6 align-self-end" type="email" />
        </div>

        <div className="passwordBlock row">
          <label className="col-3 text-end me-3" htmlFor="inputPass">
            Password
          </label>
          <input className="col-6 inputPass " type="password" />
          <button className="col-2  btn passBtn ">SHOW</button>
        </div>
        <div className="forgot text-center">Forgot your password?</div>
        <div className="row justify-content-center">
          <button className="col-2  btn btn-dark loginBtn">Sing In</button>
        </div>
        <hr />
        <div className="createAcc text-center">No account? Create one here</div>
      </form>
    </div>
  );
};

export default LoginSectionComponent;
