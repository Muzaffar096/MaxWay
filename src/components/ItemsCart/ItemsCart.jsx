import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const ItemsCart = ({ menu }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carts.itemsInCart);
  const isItemInCart = items.some((item) => item.id === menu.id);
  
  
  return (
    <div key={menu.id} className="flex w-[100%] shadow-md border-t rounded-xl border-gray-100 p-3 items-center justify-around">
      <div className="w-[15%]">
        <Image className="w-[100px] rounded-xl h-[100px] object-cover " src={menu.image} alt="Image" width={100} height={80}/>
      </div>
      <div className="w-50% ">
        <h3 className=" text-xl font-semibold text-left">{menu.title}</h3>
        <p className=" text-slate-400 w-[90%]">{menu.text}</p>
      </div>
      <div className="w-[15%] border flex justify-between h-9 border-gray-900 rounded-full items-center">
        <button className=" p-2 text-2xl font-semibold px-4">-</button>
        <button className=" p-2 text-2xl font-semibold px-4">+</button>
      </div>
      <div className="w-[15%] text-xl font-semibold flex flex-col items-center justify-center">
        <span>{menu.price} so'm</span>
      </div>
    </div>
  )
};

export default ItemsCart;
