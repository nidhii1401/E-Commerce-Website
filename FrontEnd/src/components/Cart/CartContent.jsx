import React, { useState } from "react";
import {RiDeleteBin3Line} from 'react-icons/ri'

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2017/05/23/10/53/t-shirt-design-2336850_1280.jpg",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 45,
      image:
        "https://cdn.pixabay.com/photo/2018/10/10/14/23/pants-3737399_1280.jpg",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 65,
      image:
        "https://media.istockphoto.com/id/1148523276/photo/gorgeous-female-brunette-model-in-white-clothes.jpg?s=612x612&w=0&k=20&c=s4B7-N5xrqaUSgYH02aWTuRlwcUN1E7QOsXwn5DDuV0=",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mr-4 rounded "
            />
            <div>
              <h3> {product.name} </h3>
              <p className="text-sm text-gray-500">
                Size:{product.size} | Color: {product.color}
              </p>

              <div className="flex items-center gap-4 mt-2">
                <button className="border rounded px-1 py-1 text-xl font-medium border-gray-300">
                  -
                </button>
                <span className="mx-4 ">{product.quantity}</span>
                <button className="border rounded px-1 py-1 text-xl font-medium border-gray-300">
                  +
                </button>
              </div>

            </div>
          </div>

          <div>
            <p> ${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CartContent;
