import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../redux/userSlicer";
import { loginUser, saveData } from "../../services/auth.service";

const LoginSectionComponent = () => {
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [showHide, setShowHide] = useState("password");
  const [showInput, setShowInput] = useState(true);
  //***** Deleted for form validation ****
  // const [validationMsg, setValidationMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInObj = (e) => {
    let copySingIn = { ...signInObj };
    copySingIn[e.target.name] = e.target.value;
    setSignInObj(copySingIn);
  };

  const showAndHide = () => {
    showHide === "password" ? setShowHide("text") : setShowHide("password");
  };

  const onLoginSubmit = () => {
    //***** Deleted for form validation ****
    if (!signInObj.email && !signInObj.password) {
      return;
    }

    loginUser(signInObj)
      .then((res) => {
        if (res.status === 215) {
          setShowInput(false);
        } else {
          setShowInput(true);
          // console.log(res.data);
          saveData(res.data);
          dispatch(saveUser(res.data));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        err && setErrorMsg("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="loginSection">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={`hideInput text-center ${showInput && "displayNone"} `}>
          <input
            type="text"
            placeholder={errorMsg ? errorMsg : "Authentication failed."}
          />
        </div>
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
            type={showHide}
            name="password"
            onChange={handleSignInObj}
            required
          />
          <button onClick={showAndHide} className="col-2  btn passBtn ">
            {showHide === "password" ? "SHOW" : "HIDE"}
          </button>
        </div>
        <div className="forgot text-center">Forgot your password?</div>
        <div className="row justify-content-center">
          <button
            className="col-2  btn btn-dark loginBtn"
            onClick={onLoginSubmit}
          >
            Sign In
          </button>
        </div>
        <hr />
        <div className="createAcc text-center">No account? Create one here</div>
      </form>
    </div>
  );
};

export default LoginSectionComponent;
