import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [theme, setTheme] = useState("dark-theme");
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
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
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
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
            <li onClick={() => setToggleBtn(!toggleBtn)}>
              {toggleBtn ? (
                <i onClick={toggleTheme} className="fa-solid fa-sun"></i>
              ) : (
                <i onClick={toggleTheme} className="fa-solid fa-moon"></i>
              )}
            </li>
          </ul>
          <ul className="avatar">
            <div className="profile">
              {user?.uid && (
                <img
                  title={user?.displayName}
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/GnhkKS2/bubble-gum-avatar-icon.png"
                  }
                  alt=""
                />
              )}
            </div>
            <li>
              {user?.uid ? (
                <a onClick={handleLogout}>Sign Out</a>
              ) : (
                <NavLink to="signin">Sign in</NavLink>
              )}
            </li>
          </ul>
          <div className="toggle-btn" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
