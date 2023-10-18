import { useState } from "react"; 
import Logo from "../assets/img/food.png";
import { Link } from "react-router-dom";

// here i want to build Single page application

//  so we have two types of Routing there
/*
    1) server side routing => here whole application is loading 
    2) client side routing => here only the component is loading + help to build us the SPA
*/

export const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={Logo} />
    </a>
  );
};
const HeaderComponent = function () {
  return (
    <div className="Header">
      <Title />

      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {/* {console.log(10)} */}

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
