import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from './../Components/Error/Error';
import Login from './../Authorization/Login';
import Register from './../Authorization/Register';
import Details from "../Components/Details/Details";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import PrivateRoute from './PrivateRoute';
import User from "../Components/User/User";
import AllServices from "../Components/AllServices/AllServices";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: () => fetch('/data.json')
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><Details/></PrivateRoute>,
          loader: () => fetch('/data.json')
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/update",
          element: <PrivateRoute><UpdateProfile/></PrivateRoute>,
        },
        {
          path: "/user",
          element: <PrivateRoute><User/></PrivateRoute>,
        },
        {
          path: "/allservices",
          element: <PrivateRoute><AllServices/></PrivateRoute>,
        },
      ]
    },
  ]);

  export default router;