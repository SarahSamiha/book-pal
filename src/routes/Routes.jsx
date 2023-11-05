import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Root/pages/home/Home";
// import BookDetails from "../Root/pages/BookDetails/BookDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('/books.json')
    },
    // {
    //     path: "/bookDetails",
    //     element: <BookDetails></BookDetails>
    // }
  ]);

export default router;