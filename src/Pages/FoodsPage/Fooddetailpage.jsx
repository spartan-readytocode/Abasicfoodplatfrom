import React from "react";
import {
  pizzainfo,
  sandwichinfo,
  icecreaminfo,
  burgerinfo,
} from "../../Constraints/Index";

const Fooddetailpage = () => {
  return (
    <div>
      <div className="container">
        <div className="basics">
          <p className="font-mono text-lg font-semibold text-center">
            COME GRABS SOME SNACKS AND FILL YOUR TUMMY
          </p>
        </div>
      </div>
      <div className="pizzacontainer m-4" id="pizza">
        <p className="font-bold text-3xl font-mono text-center">Pizzas</p>
        <div className="items flex flex-wrap lg:flex-row gap-6 justify-center">
          {pizzainfo.map((item, index) => {
            return (
              <div
                key={index}
                className="p-2 border-4 border-blue-900 flex flex-col gap-3"
              >
                <div className="imagecontaine ">
                  <img src={item.img} className="w-80 h-72" />
                </div>
                <div className="discription text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button className="p-2 border border-black bg-black text-white hover:bg-slate-600">
                    ORDER NOW
                  </button>
                </div>
              </div>
            );
          })}
          {""}{" "}
        </div>
      </div>
      {/* this is for the sandwich section  */}
      <div className="sandwhichcontainer" id="sandwich">
        <p className="font-bold text-3xl font-mono text-center">Sandwiches </p>

        <div className="sandwhiches items flex flex-wrap lg:flex-row gap-6 justify-center">
          {sandwichinfo.map((item, key) => {
            return (
              <div
                key={key}
                className="p-2 border-4 border-green-900 flex flex-col gap-3"
              >
                <div className="imagecontaine ">
                  <img src={item.img} className="w-80 h-72" />
                </div>
                <div className="discription text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button className="p-2 border border-black bg-black text-white hover:bg-slate-600">
                    ORDER NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* this is for the icecream sections */}
      <div className="icecreamcontainer" id="icecream">
        <p className="font-bold text-3xl font-mono text-center">Ice Creams </p>

        <div className="sandwhiches items flex flex-wrap lg:flex-row gap-6 justify-center">
          {icecreaminfo.map((item, key) => {
            return (
              <div
                key={key}
                className="p-2 border-4 border-green-900 flex flex-col gap-3"
              >
                <div className="imagecontaine ">
                  <img src={item.img} className="w-80 h-72" />
                </div>
                <div className="discription text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button className="p-2 border border-black bg-black text-white hover:bg-slate-600">
                    ORDER NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* this is for the burger section  */}
      <div className="burgercontainerr" id="burger">
        <p className="font-bold text-3xl font-mono text-center">BURGERS </p>

        <div className="burgers items flex flex-wrap lg:flex-row gap-6 justify-center">
          {burgerinfo.map((item, key) => {
            return (
              <div
                key={key}
                className="p-2 border-4 border-green-900 flex flex-col gap-3"
              >
                <div className="imagecontaine ">
                  <img src={item.img} className="w-80 h-72" />
                </div>
                <div className="discription text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button className="p-2 border border-black bg-black text-white hover:bg-slate-600">
                    ORDER NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fooddetailpage;
