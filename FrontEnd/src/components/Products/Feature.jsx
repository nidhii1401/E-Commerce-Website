import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp"

const Feature = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto flex flex-row gap-5 bg-green-50 rounded-3xl">
        {/* Left Content */}
        <div className=" w-1/2 text-left p-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Comfort and Style
          </h2>

          <h2 className="text-5xl font-bold mb-6">
            Apparel made for your everyday life.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you look and feel great every
            day.
          </p>
          <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">Shop Now </Link>
        </div>
        {/* Right Content */}

        <div className="w-1/2">
        <img src={featured} alt="Feature Collection" 
        className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"/>
        </div>
      </div>
    </div>
  );
};

export default Feature;
