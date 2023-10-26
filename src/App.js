// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
// ## Namaste React Course by Akshay Saini
// # Chapter 06 - Exploring the world

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/ResturantMenu";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component


const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <About />
      <Body />
      <Contact /> 
      {Outlet}      
      */    
      }
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  //  this array of data of url
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resutrant/:id",
        element: <RestaurantMenu />
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);