import React from "react";

const Pizza = ({ imagesrc, imagename }) => {
  return (
    <div>
      <div className="bg-white p-1 lg:p-2 lg:w-96 border-2 border-slate-500 rounded-3xl">
        <div className="imagecontainer flex flex-col justify-center items-center gap-3">
          <div className="name text-center text-2xl font-semibold font-mono text-red-500">
            {imagename}
          </div>
          <img
            src={imagesrc}
            className="w-72 hover:opacity-60 rounded-2xl"
            alt={imagename}
          />
          <div className="imagedis font-Mukta w-72 lg:w-80 px-2 text-red-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ullam
            animi, quos perspiciatis distinctio itaque similique atque velit eum
            facere corporis in dignissimos vel.
          </div>
          <div className="buys border border-red-400 w-40 text-center font-medium bg-black text-white p-2 rounded-lg hover:bg-slate-400">
            <button>
              <a href="#pizza">WANT TO BUY</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
