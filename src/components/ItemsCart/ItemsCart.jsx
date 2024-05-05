import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  decrementItemInCart,
  removeItem,
  setItemInCart,
} from "@/redux/cartSlicer";

const ItemsCart = ({ menu }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carts.itemsInCart);
  const isItemInCart = items.some((item) => item.id === menu.id);
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
    <div
      key={menu.id}
      className="flex w-[100%] shadow-md border-t rounded-xl border-gray-100 p-3 items-center justify-around"
    >
      <div className="w-[15%]">
        <Image
          className="w-[100px] rounded-xl h-[100px] object-cover "
          src={menu.image}
          alt="Image"
          width={100}
          height={80}
        />
      </div>
      <div className="w-50% ">
        <h3 className=" text-xl font-semibold text-left">{menu.title}</h3>
        <p className=" text-slate-400 w-[90%]">{menu.text}</p>
      </div>
      <div className="w-[13%] border flex justify-between h-9 border-gray-900 rounded-full items-center">
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
      <div className="w-[20%] text-xl font-semibold flex flex-col items-center justify-end">
        <span>{menu.price} so'm</span>
      </div>
    </div>
  );
};

export default ItemsCart;
