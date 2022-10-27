import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";

const Category = () => {
  const categories = useLoaderData();

  return (
    <>
      <div className="course-container">
        <div className="wrapper-container">
          <div className="left-side-nav">
            <LeftSideNav />
          </div>
          <div className="right-side">data {categories?.length}</div>
        </div>
      </div>
    </>
  );
};

export default Category;
