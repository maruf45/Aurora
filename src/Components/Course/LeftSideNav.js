import React, { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import "./LeftSideNav.css";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://server-side-steel.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="left-side-nav">
        <h3>AllCategories {categories.length}</h3>
        {categories.map((category) => {
          return (
            <React.Fragment key={category.id}>
              <li>
                <NavLink to={`/courses/${category.id}`}>
                  {category.categories}
                </NavLink>
              </li>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default LeftSideNav;
