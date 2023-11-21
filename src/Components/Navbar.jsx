import React from "react";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { MdFastfood, MdFeedback } from "react-icons/md";

const Navbar = () => {
  const listItemStyles =
    "font-Mukta  font-medium flex  item-center gap-1 lg:gap-2  lg:text-xl text:center ";
  return (
    <div className="sticky z-30">
      <div className="container flex justify-between lg:justify-between p-2 ">
        <div className="logo lg:px-3">
          <span className="font-semibold text-xl lg:text-2xl text-red-800">
            FO
          </span>
          <span className="font-semibold text-xl lg:text-2xl text-green-800">
            OD
          </span>
          <span className="font-semibold  text-xl lg:text-2xl text-yellow-800">
            IES
          </span>
        </div>
        <div className="listitems">
          <ul className="flex gap-2  items-center  text-center lg:gap-4 lg:w-96">
            <NavLink to="/" className={listItemStyles}>
              <span>HOME</span>{" "}
              <span className="text-red-700">
                <BiHome />
              </span>
            </NavLink>
            <NavLink to="/Foods" className={listItemStyles}>
              <span>FOOD</span>

              <span className="text-amber-800">
                <MdFastfood />
              </span>
            </NavLink>
            <NavLink to="/FeedbackPage" className={listItemStyles}>
              <span>FEEDBACK</span>
              <span className="text-blue-600">
                <MdFeedback />
              </span>
            </NavLink>
            <NavLink to="/cart" className={listItemStyles}>
              <span>CART</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
