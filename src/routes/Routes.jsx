import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Root/pages/home/Home";
import Root from "../Root/Root";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import ErrorPage from "../Root/pages/ErrorPage/ErrorPage";
import AddBook from "../Root/pages/AddBook/AddBook";


  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
              path: "/addBook",
              element: <AddBook></AddBook>
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/signUp',
              element: <SignUp></SignUp>
            }
        ]
    },
  ]);

export default router;