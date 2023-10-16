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
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Components/About";


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
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />

  },
  {
    path: "/about",
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);