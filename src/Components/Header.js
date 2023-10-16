import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpg"

export const Title = () => {
    return (
        <a href="/">
            <img
                className="logo"
                alt="logo"
                src={Logo}
            />
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Conatact with Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};
export default HeaderComponent;
