import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, GitHub, Home, User } from "./components";
import { gitUserInfo } from "./components/Github/Github";

// 1st way to make route in react

{
  /* 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
    ]
  },
]); 
*/
}

// second way to make route in react

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User/>} />
      <Route 
      // 2way showing
      loader={gitUserInfo}
      path="github" 
      element={< GitHub/>} 
      />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
