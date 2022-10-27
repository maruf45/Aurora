import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../Components/404Page/NotFoundPage";
import SignIn from "../Components/Authentication/Signin/SignIn";
import SignUp from "../Components/Authentication/Signup/SignUp";
import Blogs from "../Components/Blogs/Blogs";
import Category from "../Components/Course/Category";
import CheckOut from "../Components/Course/CheckOut";
import Course from "../Components/Course/Course";
import CourseDetail from "../Components/Course/CourseDetail";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "courses/",
        element: <Course />,
      },
      {
        path: "courses/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "course-detail/:courseId",
        element: <CourseDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.courseId}`),
      },
      {path : 'checkout/:courseDetailId', element: <PrivateRoute><CheckOut/></PrivateRoute>},
      {
        path: "blogs",
        element: <Blogs />,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
