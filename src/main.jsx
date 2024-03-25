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
import Posts from "./Component/Posts/Posts.jsx";
import PostDetails from "./Component/PostDetails/PostDetails.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path:"/posts",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:"/posts/:postId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
        element: <PostDetails></PostDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
