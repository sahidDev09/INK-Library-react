import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/Home.jsx";
import SingleBookDetails from "./components/books/SingleBookDetails.jsx";
import ListedBooks from "./components/listed-books/ListedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        loader: () => fetch("/books.json"),
        element: <Home></Home>,
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book/:id",
        element: <SingleBookDetails></SingleBookDetails>,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
