import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/Authentication/Signin/SignIn";
import SignUp from "../Components/Authentication/Signup/SignUp";
import Blogs from "../Components/Blogs/Blogs";
import Course from "../Components/Course/Course";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "courses", element: <Course /> },
      { path: "blogs", element: <Blogs /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  { path: "*" },
]);

export default router;
