import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <form>
            <h1>Sign Up</h1>
            <h3>Create a new account</h3>
            <div className="name-field">
              <label htmlFor="name">Name</label> 
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="email-field">
              <label htmlFor="email">Email address</label> 
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="password-field">
              <label htmlFor="password">Password</label> 
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
              />
              <p>Forgot Password?</p>
            </div>
            <input className="submit-btn" type="submit" value="Sign up" />
          </form>
          <div className="social-signin">
            <p>Sign up with social accounts</p>
            <button>Google</button>
            <button>Github</button>
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
