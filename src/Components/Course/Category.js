import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";
import './Category.css'
const Category = () => {
  const courseDetail = useLoaderData();

  return (
    <>
      <div className="course-container">
        <LeftSideNav />
        <div className="wrapper-container">
          <div className="right-side">
            {courseDetail?.map((course) => {
              return (
                <React.Fragment key={course.id}>
                  <div  className="courses-container">
                    <div className="course-wrapper">
                        <img src={course.image} alt="" />
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <Link to={`/course-detail/${course.id}`}>Get Details </Link>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
