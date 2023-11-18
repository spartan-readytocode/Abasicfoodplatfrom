import React from "react";
import { NavLink } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="flex flex-col  lg:flex-row justify-between  px-8 bg-[#ebf5f5]">
      <div className="left p-3 flex flex-col justify-center items-center gap-4 ">
        <span className="font-bold text-3xl  font-sans text-[#093b3b] lg:text-4xl">
          {" "}
          WHAT DO YOU WANT TO EAT ?
        </span>
        <span className="font-semibold  text-2xl lg:text-3xl font-sans text-[#e64ed9]">
          {" "}
          WE SERVE EVERYTHING
        </span>
        <span className="font-normal  text-[#40c9c9] text-xl font-Mukta">
          "GET THE FOOD DELIVERED IN YOUR HOUSE <br />
          YOU WILL FIND ITALIAN, CHINESE NORTH INDIAN SOUTH INDIAN <br />
          ALL THE VARIETIES OF SNACKS AND CAKES . LOOK INTO THE FOOD ITEMS
          <br /> AND HURRY UP ".
        </span>
        <button className="border border-red-300 p-2 w-54 text-center  text-lg font-mono font-semibold bg-black text-white  rounded-full cursor-pointer hover:bg-slate-400">
          <NavLink to={"/Foods"}> BROWSE FOODS </NavLink>
        </button>
      </div>

      <div className="right p-12">
        <div className="imgcontainer hidden lg:block">
          <img
            src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png.webp"
            className="max-w-xl h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
