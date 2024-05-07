import React, { forwardRef } from "react";
import {
  decrementItemInCart,
  removeItem,
  setItemInCart,
} from "@/redux/cartSlicer";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

export const Products = forwardRef(({ menu },ref) => {
  const items = useSelector((state) => state.carts.itemsInCart);
  const dispatch = useDispatch();
  const handleClick = (menu) => {
    dispatch(setItemInCart(menu));
  };
  const removeItemFromCart = (menu) => {
    const currentItem = items.find((item) => item.id === menu.id);
    if (currentItem && currentItem.count == 1) {
      dispatch(removeItem(menu));
    } else {
      dispatch(decrementItemInCart(menu));
    }
  };

  return (
    <div ref={ref} className=" max-w-[300px] rounded-xl shadow-lg" key={menu.id}>
      <Image
        className=" rounded-t-xl h-[200px]"
        src={menu.image}
        alt="Image"
        width={300}
        height={200}
      />
      <div className=" px-3 ">
        <h4 className=" text-xl font-semibold py-3">{menu.title}</h4>
        <p className=" text-slate-600">{menu.text}</p>
        <div className="flex justify-between md:flex-col py-4 items-center">
          <span className=" text-xl font-bold">{menu.price} so'm</span>
          {items.findIndex((product) => product.id == menu.id) > -1 ? (
            <div className=" border flex justify-between  border-gray-900 rounded-full h-[40px] items-center">
              <button
                onClick={() => removeItemFromCart(menu)}
                className=" p-2 text-2xl font-semibold px-4"
              >
                <FaMinus className=" text-[15px]" />
              </button>
              <span>
                {items.find((item) => item.id === menu.id) && (
                  <span>{items.find((item) => item.id === menu.id).count}</span>
                )}
              </span>
              <button
                onClick={() => handleClick(menu)}
                className=" p-2 text-2xl font-semibold px-4"
              >
                <FaPlus className=" text-[15px]" />
              </button>
            </div>
          ) : (
            <div
              onClick={() => handleClick(menu)}
              className="border-none md:w-full bg-[#51267D] active:bg-green-600 rounded-full text-white p-2 h-[40px] px-4 cursor-pointer"
            >
              Qo'shish
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const MProducts = motion(Products);
