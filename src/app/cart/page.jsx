"use client";
import { auth } from "@/components/Firebase/Firebase";
import ItemsCart from "@/components/ItemsCart/ItemsCart";
import Login from "@/components/Login/Login";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";

const Cart = () => {
  const [loginActive, setLoginActive] = useState(false);
  const items = useSelector((state) => state.carts.itemsInCart);
  const totalPrice = items.reduce(
    (acc, products) => (acc += products.price * products.count),
    0
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [donePassword, setDonePassword] = useState("");
  const [error, setError] = useState("");

  const [authUser, setAuthUser] = useState("");

  const hanleClick = (e) => {
    e.preventDefault();
    if (password !== donePassword) {
      setError("Parollar bir xil emas");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setDonePassword("");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log(e));
  };

  return (
    <section className=" my-10 relative">
      <h2 className="text-3xl my-10 font-bold">Savatcha</h2>
      <div className=" flex flex-wrap justify-between">
        <div className=" w-[68%] xl:w-[100%]">
          {items.length > 0
            ? items.map((menu) => <ItemsCart menu={menu} key={menu.id} />)
            : (<p className="text-xl text-slate-700">Savatcha bo'sh</p>)}
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
        <div className="p-5 relative">
          <button
            className="float-right absolute -right-2 -top-2"
            onClick={() => setLoginActive(false)}
          >
            <ImCancelCircle className=" text-[30px] " />
          </button>
          {authUser ? (
            <div>
              <div>
                <button
                  onClick={userSignOut}
                  className=" text-white p-2 px-4 rounded-full absolute -top-1 -left-1 bg-red-700 active:bg-orange-500"
                >
                  Chiqish
                </button>
              </div>
              <h3 className=" text-xl text-center mt-10">
                To'lovni amalga oshirish uchun <span>Xarid qilish</span>{" "}
                tugmasini bosing
              </h3>
              <div className=" h-[280px] grid content-end">
                <button
                  onClick={() => setLoginActive(false)}
                  className="p-3 w-full  active:bg-green-600  bg-slate-200 rounded-full"
                >
                  Xarid qilish
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className=" text-3xl font-semibold  text-center">
                Tizimga kirish
              </h3>
              <p className=" text-xl text-center mt-2 text-slate-500">
                Email orqali tizimga kiring
              </p>
              <form onSubmit={hanleClick}>
                <label className="block mt-3" htmlFor="email">
                  Email addres
                  <input
                    className=" border block w-full p-2 rounded-lg border-purple-800"
                    name="email"
                    type="email"
                    placeholder="Email kiriting"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="block" htmlFor="password">
                  Password
                  <input
                    className=" border block w-full p-2 rounded-lg border-purple-800"
                    name="password"
                    type="password"
                    placeholder="Parol kiriting"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label className="block " htmlFor="password2">
                  Password
                  <input
                    className=" border block w-full p-2 rounded-lg border-purple-800"
                    name="password2"
                    type="password"
                    placeholder="Parolni tasdiqlang"
                    value={donePassword}
                    onChange={(e) => setDonePassword(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="p-3 w-full mt-9 active:bg-green-600  bg-slate-200 rounded-full "
                >
                  Kodni yuborish
                </button>
                {error ? <p className=" text-red-700">{error}</p> : ""}
              </form>
            </div>
          )}
        </div>
      </Login>
    </section>
  );
};

export default Cart;
