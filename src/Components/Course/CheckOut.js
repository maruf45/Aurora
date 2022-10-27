import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkout = useLoaderData();
  const Swal = require("sweetalert2");
  const handlePurchase = () => {
    Swal.fire({
      title: "Good Job",
      text: "Successfully Enroll",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <>
      <div className="wrapper-container">
        <div className="course-detail">
          <img src={checkout.image} alt="" />
          <h2>{checkout?.title}</h2>
          <p> {checkout?.description}</p>
          <a onClick={handlePurchase}>Purchase Now</a>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
