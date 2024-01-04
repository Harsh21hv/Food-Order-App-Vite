import React from "react";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1>Your cart</h1>

      {cartItems.length === 0 && (
        <div className="m-4 p-4  ">
          <Link
            className="no-underline font-serif font-semibold text-black text-lg hover:text-2xl "
            to="/"
          >
            Explore Restaurants
          </Link>
        </div>
      )}
      <div className="w-6/12 m-auto">
        <CategoryList items={cartItems} />
        <button
          className=" p-4 m-4 rounded-xl bg-orange-500 cursor-grab text-white border-none hover:bg-orange-400 font-bold font-serif "
          onClick={handleClearCart}
        >
          Hit me to clear your Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
