import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className={toggle ? "" : "nav-collapse"}>
        <div className="wrapper-container">
          <div className="logo">
            <NavLink to="/">
              <img src="https://i.ibb.co/XzdjvPw/logo.gif" alt="" />
              <p>Aurora</p>
            </NavLink>
          </div>
          <div className="toggle-btn" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="blogs">Blogs</NavLink>
            </li>
          </ul>
          <ul className="avatar">
            <div className="profile">
              <img
                src="https://i.ibb.co/GnhkKS2/bubble-gum-avatar-icon.png"
                alt=""
              />
            </div>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
