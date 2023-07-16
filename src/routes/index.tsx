import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

export default routes;
