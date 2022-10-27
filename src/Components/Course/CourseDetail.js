import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetail.css";
import Pdf from "react-to-pdf";
import PdfHeader from "./PdfHeader";
const ref = React.createRef();
const CourseDetail = () => {
  const courseDetail = useLoaderData();
  return (
    <>
      <Pdf targetRef={ref} filename="course-detail.pdf">
        {({ toPdf }) => <PdfHeader toPdf={toPdf}/>}
      </Pdf>
      <div ref={ref} className="wrapper-container">
        <div  className="course-detail">
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
