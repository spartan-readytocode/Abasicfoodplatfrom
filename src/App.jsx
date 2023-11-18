import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Food from "./Pages/FoodsPage/Food";
import Home from "./Pages/Homepage/Home";
import Feedback from "./Pages/FeedbackPage/Feedback";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Food />} />
          <Route path="/FeedbackPage" element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

{
  /* <div className="brief text-red-500 text-center font-mono font-bold ">
PLEASE SHARE YOUR VALUABLE FEEDBACK WITH US THAT WILL HELP US TO IMPROVE{" "}
</div> */
}
