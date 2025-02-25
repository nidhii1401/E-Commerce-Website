import React from "react";
import image from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-center text-center text-white"
      id="simg"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="font-bold text-9xl ">
        VACATION <br /> READY
      </h1>
      <p className="text-sm mt-2">
        Explore our vacation ready outfits with fast world wide shopping
      </p>

      <Link
        to="#"
        className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
      >
        {" "}
        Shop Now
      </Link>
    </div>
  );
};

export default Hero;
