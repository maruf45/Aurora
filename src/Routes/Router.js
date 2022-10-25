import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/Authentication/Signin/SignIn";
import SignUp from "../Components/Authentication/Signup/SignUp";
import Main from "../Components/Main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  { path: "*" },
]);

export default router;
