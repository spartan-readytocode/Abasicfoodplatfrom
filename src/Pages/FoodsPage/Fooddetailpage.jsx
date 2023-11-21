import React from "react";
import { pizzainfo, sandwichinfo, burgerinfo } from "../../Constraints/Index";
import { addToCart as addPizzaToCart } from "../../Store/Features/PizzaSlice";
import { addToCart as addSandwichToCart } from "../../Store/Features/SandwichSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const FoodDetailPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (id, type) => {
    switch (type) {
      case "pizza":
        dispatch(addPizzaToCart({ id, quantity: 1 }));
        break;
      case "sandwich":
        dispatch(addSandwichToCart({ id, quantity: 1 }));
        break;
      case "burger":
        dispatch(addBurgerToCart({ id, quantity: 1 }));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="basics">
          <p className="font-mono text-lg font-semibold text-center">
            COME GRAB SOME SNACKS AND FILL YOUR TUMMY
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
                <div className="imagecontaine">
                  <img src={item.img} className="w-80 h-72" alt={item.title} />
                </div>
                <div className="discription text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button
                    onClick={() => handleAddToCart(item.id, "pizza")}
                    className="p-2 border border-black bg-black text-white hover:bg-slate-600"
                  >
                    <NavLink to={"/cart"}>ORDER NOW</NavLink>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* this is for the sandwich section  */}
      <div className="sandwichcontainer" id="sandwich">
        <p className="font-bold text-3xl font-mono text-center">Sandwiches </p>

        <div className="sandwiches items flex flex-wrap lg:flex-row gap-6 justify-center">
          {sandwichinfo.map((item, key) => {
            return (
              <div
                key={key}
                className="p-2 border-4 border-green-900 flex flex-col gap-3"
              >
                <div className="imagecontainer ">
                  <img src={item.img} className="w-80 h-72" alt={item.title} />
                </div>
                <div className="description text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button
                    onClick={() => handleAddToCart(item.id, "sandwich")}
                    className="p-2 border border-black bg-black text-white hover:bg-slate-600"
                  >
                    <NavLink to={"/cart"}>ORDER NOW</NavLink>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* this is for the burger section  */}
      <div className="burgercontainer" id="burger">
        <p className="font-bold text-3xl font-mono text-center">BURGERS </p>

        <div className="burgers items flex flex-wrap lg:flex-row gap-6 justify-center">
          {burgerinfo.map((item, key) => {
            return (
              <div
                key={key}
                className="p-2 border-4 border-green-900 flex flex-col gap-3"
              >
                <div className="imagecontainer ">
                  <img src={item.img} className="w-80 h-72" alt={item.title} />
                </div>
                <div className="discription text-center font-semibold font-Mukta">
                  {item.title} <br />
                  <button
                    onClick={() => handleAddToCart(item.id, "burger")}
                    className="p-2 border border-black bg-black text-white hover:bg-slate-600"
                  >
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

export default FoodDetailPage;
