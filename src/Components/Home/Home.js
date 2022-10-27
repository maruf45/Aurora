import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="wrapper-container">
          <div className="home-content">
            <div className="left-col">
              <h1>
                Learning From <br /> Our Course
              </h1>
              <p>
                Welcome to our learning platform. this is grate place to learn 
                html css javascript, <br /> our course especially create for absolute 
                beginner. learn anything our course.
              </p>
            </div>
            <div className="right-col">
              <img src="https://i.ibb.co/Pxx2yQw/course.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
