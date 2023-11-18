import React from "react";
import { NavLink } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { TbLicense } from "react-icons/tb";
import { FaFirstOrder } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-evenly pt-4 bg-[#c2ccc5]">
      <div className="container1 flex flex-col">
        <p className="text-sm lg:text-base font-semibold mb-2">FOODIES</p>
        <p className="text-sm lg:text-base">
          ORDER AND EAT HOW MUCH YOU <br />
          WANT IN VERY CHEAP PRICES
        </p>
      </div>
      <div className="container1 flex flex-col text-sm lg:text-base">
        <p className="font-semibold mb-2">LINKS</p>
        <div className="flex gap-2">
          {" "}
          <NavLink to="/food">FOODS </NavLink> <IoFastFood />
        </div>
        <div className="flex gap-2">
          {" "}
          <NavLink>LICENSE</NavLink> <TbLicense />
        </div>
        <div className="flex gap-2">
          {" "}
          <NavLink>ORDERS</NavLink>
          <FaFirstOrder />
        </div>
        <div className="flex gap-2">
          <NavLink>HELP</NavLink>
          <FaHandsHelping />
        </div>
      </div>
      <div className="container1 flex flex-col text-sm lg:text-base">
        <p className="font-semibold mb-2">CONTACT</p>
        <p>harilal@gmail.com</p>
        <p>+001 2578945</p>
        <p>+97 8622578945</p>
      </div>
    </div>
  );
};

export default Footer;
