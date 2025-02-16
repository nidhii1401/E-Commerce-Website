import React, { useState } from "react";

const CartContent = () => {

  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 45,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 65,
      image: "https://picsum.photos/200?random=3",
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
                <img src={product.image} alt={product.name}  className="w-40 h-40 object-cover mr-4 rounded "/>
                <div>
                    <h3> {product.name} </h3>
                    <p className="text-sm text-gray-500">
                        Size:{product.size} | Color: {product.color}
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <button className="border rounded px-1 py-1 text-xl font-medium border-gray-300">-</button>
                        <span className="mx-4 ">{product.quantity}</span>
                        <button className="border rounded px-1 py-1 text-xl font-medium border-gray-300">+</button>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
