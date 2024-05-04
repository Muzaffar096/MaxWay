import React from "react";
import { setItemInCart } from "@/redux/cartSlicer";
import { useDispatch } from "react-redux";
import Image from "next/image";

const Products = ({ menu }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(menu));
  };
  return (
    <div className=" max-w-[300px] rounded-xl shadow-lg" key={menu.id}>
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
          <div
            onClick={handleClick}
            className="border-none md:w-full bg-[#51267D] rounded-full text-white p-2 px-4 cursor-pointer"
          >
            Qo'shish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
