import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Root/pages/home/Home";
import Root from "../Root/Root";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import ErrorPage from "../Root/pages/ErrorPage/ErrorPage";
import AddBook from "../Root/pages/AddBook/AddBook";
import PrivateRoutes from "./PrivateRoutes";
import BooksByCategory from "../Root/pages/BooksByCategory/BooksByCategory";
import BookDetails from "../Root/pages/BookDetails/BookDetails";
import BorrowedBooks from "../Root/pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Root/pages/AllBooks/AllBooks";

// https://book-pal-server.vercel.app****
// book-pal-server.vercel.app**** //



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
                path: "/books",
                element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>,
                loader: () => fetch('https://book-pal-server.vercel.app/books')
            },
            {
              path: "/addBook",
              element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>
            },
            {
              path: "/categories/:id",
              element: <BooksByCategory></BooksByCategory>,
              loader: ({params}) => fetch(`https://book-pal-server.vercel.app/categories/${params.id}`)
              
            },
            {
              path: "/books/:id",
              element: <PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`https://book-pal-server.vercel.app/books/${params.id}`)
              
            },
            {
              path: "/borrowedBooks",
              element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
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