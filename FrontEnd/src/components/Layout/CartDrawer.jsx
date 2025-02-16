import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = (props) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        props.drawerOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={props.toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Components for cart contents --- will get back to it later*/}
        <CartContent/>
      </div>

      {/* Checkout button  fixed at the bottom*/}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 text-center">Shipping, taxes, and discount codes calculated at checkout</p>
      </div>
    </div>
  );
};

export default CartDrawer;
