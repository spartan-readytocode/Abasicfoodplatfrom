import React from "react";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { smile } from "../../Images/Exporter";

import {
  removeFromCart as removePizzaFromCart,
  addToCart as addPizzaToCart,
} from "../../Store/Features/PizzaSlice";
import {
  removeFromCart as removeSandwichFromCart,
  addToCart as addSandwichToCart,
} from "../../Store/Features/SandwichSlice";

const Cart = () => {
  const pizzaCart = useSelector((state) => state.pizza.cart);
  const sandwichCart = useSelector((state) => state.sandwich.cart1);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id, type) => {
    if (type === "pizza") {
      dispatch(removePizzaFromCart({ id, type }));
    } else if (type === "sandwich") {
      dispatch(removeSandwichFromCart({ id, type }));
    }
  };

  const handleAddToCart = (id, type) => {
    if (type === "pizza") {
      dispatch(addPizzaToCart({ id, quantity: 1, type }));
    } else if (type === "sandwich") {
      dispatch(addSandwichToCart({ id, quantity: 1, type }));
    }
  };

  const renderCartItem = (item) => (
    <li key={item.id} className="p-3 border border-red-600">
      <img src={item.img} alt={item.title} className="w-72 h-72" />
      <p className="text-center">
        {item.title} <br />
      </p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => handleAddToCart(item.id, item.type)}>
          <IoMdAdd />
        </button>
        <p>Quantity : {item.quantity}</p>
        <button onClick={() => handleRemoveFromCart(item.id, item.type)}>
          <RiSubtractFill className="red" />
        </button>
      </div>
    </li>
  );

  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-xl">YOUR CART </h2>
        {pizzaCart.length === 0 && sandwichCart.length === 0 ? (
          <div className="flex  flex-col justify-center items-center gap-4 p-3 ">
            <img src={smile} alt="" className="w-72" />
            <p className="text-center text-3xl font-sans font-extrabold text-red-600">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <ul>
            <div className="flex flex-wrap gap-3">
              {pizzaCart.map((item) =>
                renderCartItem({ ...item, type: "pizza" })
              )}
              {sandwichCart.map((item) =>
                renderCartItem({ ...item, type: "sandwich" })
              )}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
