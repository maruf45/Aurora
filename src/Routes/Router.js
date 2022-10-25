import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
const router = createBrowserRouter([{ path: "/", element: <Main /> }, {path: '*'}]);

export default router;
