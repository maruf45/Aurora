import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "../LoginForm.css";

const SignIn = () => {
  const { signIn,googleLogIn,githubLogIn } = useContext(AuthContext);
  const Swal = require("sweetalert2");
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  let [validateUserInfo, setValidateUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const submitSignInform = (event) => {
    event.preventDefault();
    const email = validateUserInfo.email;
    const password = validateUserInfo.password;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        validateUserInfo = '';
        Swal.fire({
          title: "Good Job",
          text: "Successfully SignIn",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from, {replace: true});
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  //   Identify email validation
  const emailValidation = (event) => {
    let email = event.target.value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors({ ...errors, email: "invalid email" });
      setValidateUserInfo({ ...validateUserInfo, email: event.target.value });
    } else {
      setErrors({ ...errors, email: "" });
      setValidateUserInfo({ ...validateUserInfo, email: event.target.value });
    }
    email = "";
  };
  //   Identify password validation
  const passwordValidation = (event) => {
    let password = event.target.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setErrors({
        ...errors,
        password:
          "Minimum eight characters, at least one letter and one number",
      });
      setValidateUserInfo({
        ...validateUserInfo,
        password: event.target.value,
      });
    } else {
      setErrors({ ...errors, password: "" });
      setValidateUserInfo({
        ...validateUserInfo,
        password: event.target.value,
      });
    }
    password = "";
  };
  const googleLogin =() =>{
    googleLogIn()
    .then(result =>{
        const user = result.user;
        navigate(from, {replace: true});

    })
    .catch(error =>{
        const errorMessage = error.message;
    })
  }
  const githubLogin =() =>{
    githubLogIn()
    .then(result =>{
        const user = result.user;
        navigate(from, {replace: true});
    })
    .catch(error =>{
        const errorMessage = error.message;
    })
  }
  return (
    <>
      <div className="signin-container">
        <div className="signin-wrapper">
          <form onSubmit={submitSignInform}>
            <h1>Sign in</h1>
            <h3>Sign in to access your account</h3>
            <div className="email-field">
              <label htmlFor="email">Email address</label>
              <input
                value={validateUserInfo.email}
                onChange={emailValidation}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="password-field">
              <label htmlFor="password">Password</label>
              <input
                value={validateUserInfo.password}
                onChange={passwordValidation}
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
              <p>Forgot Password?</p>
            </div>
            <input className="submit-btn" type="submit" value="Sign in" />
          </form>
          <div className="social-signin">
            <p>Sign in with social accounts</p>
            <button onClick={googleLogin}>Google</button>
            <button onClick={githubLogin}>Github</button>
          </div>
          <span>
            Don't have an account yet? <Link to="/signup">Sign up</Link>.
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
