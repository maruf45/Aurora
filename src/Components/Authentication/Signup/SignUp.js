import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "../LoginForm.css";

// CommonJS

const SignUp = () => {
  const Swal = require("sweetalert2");
  const { createUser, updateUserProfile,googleLogIn, githubLogIn } = useContext(AuthContext);
  const [validateUserInfo, setValidateUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const submitUserForm = (event) => {
    event.preventDefault();
    const email = validateUserInfo.email;
    const password = validateUserInfo.password;
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        userProfileUpdate(name, photoUrl);
        Swal.fire({
            title: 'Good Job',
            text: 'Successfully Register',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        event.target.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
      });
    const userProfileUpdate = (name, photoUrl) => {
      const profile = {
        displayName: name,
        photoURL: photoUrl,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => {
        });
    };
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
    email = ''
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
    password =''
  };
  const googleLogin =() =>{
    googleLogIn()
    .then(result =>{
        const user = result.user;
    })
    .catch(error =>{
        const errorMessage = error.message;
    })
  }
  const githubLogin =() =>{
    githubLogIn()
    .then(result =>{
        const user = result.user;
    })
    .catch(error =>{
        const errorMessage = error.message;
    })
  }
  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <form onSubmit={submitUserForm}>
            <h1>Sign Up</h1>
            <h3>Create a new account</h3>
            <div className="name-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="profile-field">
              <label htmlFor="profile">Profile Url</label>
              <input
                type="text"
                name="photoUrl"
                id="profile"
                placeholder="Enter Your Photo Url"
              />
            </div>
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
            <input className="submit-btn" type="submit" value="Sign up" />
          </form>
          <div className="social-signin">
            <p>Sign up with social accounts</p>
            <button onClick={googleLogin}>Google</button>
            <button onClick={githubLogin}>Github</button>
          </div>
          <span>
            Already have an account yet? <Link to="/signin">Sign In</Link>.
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
