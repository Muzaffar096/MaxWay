"use client";
import ItemsCart from "@/components/ItemsCart/ItemsCart";
import Login from "@/components/Login/Login";
import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";

const Cart = () => {
  const [loginActive, setLoginActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const items = useSelector((state) => state.carts.itemsInCart);
  const totalPrice = items.reduce(
    (acc, products) => (acc += products.price * products.count),
    0
  );
  const sendNumber = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <section className=" my-10 relative">
      <h2 className="text-3xl my-10 font-bold">Savatcha</h2>
      <div className=" flex flex-wrap justify-between">
        <div className=" w-[68%] xl:w-[100%]">
          {items.length > 0
            ? items.map((menu) => <ItemsCart menu={menu} key={menu.id} />)
            : "No products"}
        </div>
        <div className="w-[28%] xl:w-[100%] shadow-md border-t h-[250px] border-slate-100 p-3 rounded-xl">
          <h3 className=" text-2xl font-semibold">Umumiy</h3>
          <div className="flex justify-between">
            <p className=" text-lg py-2">Mahsulotlar</p>
            <span className=" text-xl font-medium">{totalPrice} so'm</span>
          </div>
          <div className="flex justify-between border-b">
            <p className=" text-lg py-2">Yetkazib berish</p>
            <p className=" text-xl font-medium">0 so'm</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-lg py-2">To'lash uchun</p>
            <span className=" text-xl font-medium">{totalPrice} so'm</span>
          </div>
          <button
            onClick={() => setLoginActive(true)}
            className=" w-full bg-[#51267D] rounded-full p-2 text-white"
          >
            To'lov sahifasiga o'tish
          </button>
        </div>
      </div>
      <Login className="" active={loginActive} setActive={setLoginActive}>
        <div className="p-5">
          <button className="float-right" onClick={() => setLoginActive(false)}>
            <ImCancelCircle className=" text-[30px] " />
          </button>
          <h3 className=" text-3xl font-semibold mt-8 text-center">
            Tizimga kirish
          </h3>
          <p className=" text-xl text-center mt-2 text-slate-500">
            Telefon raqamingiz bilan tizimga kiring
          </p>
          <form onSubmit={sendNumber}>
            <label className="block my-6" htmlFor="tel">
              Telefon raqam
              <input
                className=" border block w-full p-2 rounded-lg border-purple-800"
                name="tel"
                type="tel"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <button
              onClick={() => setLoginActive(false)}
              type="submit"
              className="p-3 w-full  bg-slate-200 rounded-full "
            >
              Kodni yuborish
            </button>
          </form>
        </div>
      </Login>
    </section>
  );
};

export default Cart;
