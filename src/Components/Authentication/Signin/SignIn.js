import React from "react";
import { Link } from "react-router-dom";
import '../LoginForm.css'

const SignIn = () => {
  return (
    <>
      <div className="signin-container">
        <div className="signin-wrapper">
        <form>
          <h1>Sign in</h1>
          <h3>Sign in to access your account</h3>
          <div className="email-field">
            <label htmlFor="email">Email address</label> 
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email" required
            />
          </div>
          <div className="password-field">
            <label htmlFor="password">Password</label> 
            <input type="password" name="password" id="password" placeholder="********" required />
            <p>Forgot Password?</p>
          </div>
          <input className="submit-btn" type="submit" value="Sign in" />
        </form>
        <div className="social-signin">
            <p>Sign in with social accounts</p>
            <button>Google</button>
            <button>Github</button>
        </div>
        <span>Don't have an account yet? <Link to="/signup">Sign up</Link>.</span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
