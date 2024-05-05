"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";

import logo from "../../../public/logo.svg";
import Login from "../Login/Login";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MapsCard from "../Maps/Maps";


const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [mapActive, setMapActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const sendNumber = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const items = useSelector((state) => state.carts.itemsInCart);
  const totalPrice = items.reduce(
    (acc, products) => (acc += products.price * products.count),
    0
  );

  return (
    <header className="flex items-center justify-between max-w-[1200px] mx-auto container py-6">
      <div className="flex items-center relative gap-10">
        <button className="absolute" onClick={() => setModalActive(true)}>
          <AiOutlineMenu className="hidden xl:block  text-[30px]" />
        </button>
        <Link className=" xl:ml-10" href={"/"}>
          <Image src={logo} alt="Site Logo" width={50} height={50} />
        </Link>
        <nav className=" xl:hidden">
          <ul className="flex gap-10">
            <li>
              <Link className="link text-lg" href={"/"}>
                Menyu
              </Link>
            </li>
            <li>
              <Link className="link text-lg" href={"/filial"}>
                Filiallar
              </Link>
            </li>
            <li>
              <Link className="link text-lg" href={"/about"}>
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link className="link text-lg" href={"/contact"}>
                Bog'lanish
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-10">
        <div
          onClick={() => setMapActive(true)}
          className="flex xl:hidden cursor-pointer items-center"
        >
          <span className=" w-[40px] h-[40px] rounded-full bg-[#F1EFF4] flex justify-center items-center">
            <FaLocationDot />
          </span>
          <span>Yetkazib berish</span>
        </div>
        <Link href={"/cart"} className="flex items-center">
          <span className="w-[40px] h-[40px] rounded-full bg-[#F1EFF4] flex justify-center items-center">
            <BiSolidCart />
          </span>
          <span className="ml-1">{totalPrice} so'm</span>
        </Link>
        <div className="w-[40px] h-[40px] xl:hidden rounded-full bg-[#F1EFF4] flex justify-center items-center">
          <button className="p-2" onClick={() => setLoginActive(true)}>
            <FaUserLarge />
          </button>
        </div>
      </div>
      <BurgerMenu active={modalActive} setActive={setModalActive}>
        <div className="flex justify-between">
          <h2 className=" text-2xl font-semibold">Menyu</h2>
          <button className="" onClick={() => setModalActive(false)}>
            <ImCancelCircle className=" text-[30px]" />
          </button>
        </div>
        <button
          onClick={() => {
            setLoginActive(true);
            setModalActive(false);
          }}
          className=" text-xl text-purple-950 font-semibold my-5"
        >
          Kirish
        </button>
        <hr />
        <ul>
          <li className="my-5">
            <Link
              onClick={() => setModalActive(false)}
              className=" text-lg"
              href={"/"}
            >
              Bosh sahifa
            </Link>
          </li>
          <li className="mb-5">
            <Link
              onClick={() => setModalActive(false)}
              className=" text-lg"
              href={"/filial"}
            >
              Filiallar
            </Link>
          </li>
          <li className="mb-5">
            <Link
              onClick={() => setModalActive(false)}
              className=" text-lg"
              href={"/about"}
            >
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setModalActive(false)}
              className=" text-lg"
              href={"/contact"}
            >
              Bog'lanish
            </Link>
          </li>
        </ul>
      </BurgerMenu>
      <MapsCard className="" active={mapActive} setActive={setMapActive}>
        <button className="float-right" onClick={() => setMapActive(false)}>
          <ImCancelCircle className=" text-[30px] " />
        </button>
        <h3 className=" text-2xl font-bold">
          Qabul qilib olish turini tanlang
        </h3>
        <p className=" text-slate-400">
          Real vaqt va joylashuvga mos menyuni ko'rish uchun
        </p>
        <div className="mt-6 flex justify-between">
          <div className=" w-1/2">
            <div className="flex justify-between">
              <button className="p-2 w-[48%] bg-slate-200 rounded-full hover:text-emerald-700">
                Yetkazib berish
              </button>
              <button className="p-2 w-[48%] bg-slate-200 rounded-full hover:text-emerald-700">
                Olib ketish
              </button>
            </div>
            <div className="mt-6 content-between grid h-[400px]">
              <input
                className=" w-full p-2 rounded-full border"
                type="text"
                placeholder="Yetkazib berish manzili"
              />
              <button onClick={() => setMapActive(false)} className=" w-full p-2 rounded-full bg-slate-300">
                Belgilash
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <iframe
            className=" float-end"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47963.34306422945!2d69.13672685623169!3d41.29343862000693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc7af9ea289%3A0x7364f8761707a212!2sMax%20Way!5e0!3m2!1sen!2s!4v1714951554867!5m2!1sen!2s"
              width="400"
              height="480"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </MapsCard>
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
                type="number"
                placeholder="+998"
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
    </header>
  );
};

export default Header;
