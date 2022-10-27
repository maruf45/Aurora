import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <h3>AllCategories {categories.length}</h3>
      {categories.map((category) => {
        return (
          <>
            <Link to={`/courses/${category.id}`}>
              {category.categories} <br />{" "}
            </Link>
          </>
        );
      })}
    </>
  );
};

export default LeftSideNav;
