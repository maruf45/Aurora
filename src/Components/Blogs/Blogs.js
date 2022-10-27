import React from "react";
import { useLoaderData } from "react-router-dom";
import './Blogs.css'
const Blogs = () => {
  const blogs = useLoaderData();
  
  return (
    <>
      <div className="blogs-container">
        <div className="wrapper-container">
          {blogs.map((blog) => {
            return (
              <React.Fragment key={blog.id}>
                <div className="question-container">
                  <h1>{blog.question}</h1>
                </div>
                <div className="answer">
                  <p>{blog.answer}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
