import React from "react";
import image1 from "../../assets/mens-collection.webp";
import image2 from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto flex gap-8">
        <div className="relative flex-1">
          <img src={image2} alt="" className="w-full h-[700px] object-cover" />
          <div className="absolute bottom-8 bg-white opacity-70 p-4 m-4">
            <h2 className="font-bold text-2xl text-gray-900 m-3">
              Women's Collection
            </h2>

            <Link
              to="#"
              className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg underline mt-4 font-semibold tracking-tighter"
            >
              {" "}
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <img src={image1} alt="" className="w-full h-[700px] object-cover" />
          <div className="absolute bottom-8 bg-white opacity-70 p-4 m-4">
            <h2 className="font-bold text-2xl text-gray-900 m-3">
              Men's Collection
            </h2>

            <Link
              to="#"
              className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg underline mt-4 font-semibold tracking-tighter"
            >
              {" "}
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collection;
