import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import './CourseDetail.css'
const CourseDetail = () => {
  const courseDetail = useLoaderData();
  return (
    <>
      <div className="wrapper-container">
        <div className="course-detail">
          <img src={courseDetail.image} alt="" />
          <h2>{courseDetail?.title}</h2>
          <p> {courseDetail?.description}</p>
          <Link to={`/checkout/${courseDetail.id}`}>Get Premium</Link>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
