import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user , loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <Loader/>
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
