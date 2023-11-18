// src/components/FeedbackPage.js
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentFeedback = feedback;
    const currentRating = rating;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Feedback submitted:", { currentFeedback, currentRating });

    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto mt-8">
      <animated.h1
        style={fadeIn}
        className="text-2xl font-bold mb-4 text-red-700 text-center"
      >
        PLEASE SHARE YOUR VALUABLE FEEDBACK WITH US THAT WILL HELP US TO IMPROVE{" "}
      </animated.h1>
      {
        <div className="brief text-red-500 text-center font-mono font-bold "></div>
      }
      <form
        onSubmit={handleSubmit}
        className={`max-w-md mx-auto ${isSubmitted ? "hidden" : ""}`}
      >
        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-600"
          >
            Your Feedback
          </label>

          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-600"
          >
            Rate the food (out of 5)
          </label>
          <div className="flex items-center mt-2">
            {[1, 2, 3, 4, 5].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleRatingChange(option)}
                className={`mr-2 p-2 rounded-md ${
                  option === rating
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
      {isSubmitted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4">
          Thank you for your feedback! Here are your responses:
          <ul className="list-disc mt-2 ml-4">
            <li>Feedback: {feedback}</li>
            <li>Rating: {rating}/5</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Feedback;
