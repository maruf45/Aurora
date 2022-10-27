import React, { useEffect, useState } from "react";

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
    </>
  );
};

export default LeftSideNav;
