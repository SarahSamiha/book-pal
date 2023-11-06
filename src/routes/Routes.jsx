import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Root/pages/home/Home";
import Root from "../Root/Root";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
// import BookDetails from "../Root/pages/BookDetails/BookDetails";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/books.json')
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