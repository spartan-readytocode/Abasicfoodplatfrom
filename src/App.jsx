import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Food from "./Pages/FoodsPage/Food";
import Home from "./Pages/Homepage/Home";
import Feedback from "./Pages/FeedbackPage/Feedback";
import Cart from "./Pages/CartPage/Cart";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Food />} />
          <Route path="/FeedbackPage" element={<Feedback />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
