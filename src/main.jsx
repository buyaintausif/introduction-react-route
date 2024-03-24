import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Users from "./Component/Users/Users.jsx";
import UserDetails from "./Component/UserDetails/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/header",
        element:<Header></Header>
      },{
        path:"/users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },{
        path:"/user/:userId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
