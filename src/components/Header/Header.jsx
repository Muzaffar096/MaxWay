import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";

import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1200px] mx-auto container py-6">
      <div className="flex items-center gap-10">
        <Image src={logo} alt="Site Logo" width={50} height={50} />
        <nav className=" xl:hidden">
          <ul className="flex gap-10">
            <li>
              <Link className=" text-lg" href={"/"}>
                Menyu
              </Link>
            </li>
            <li>
              <Link className=" text-lg" href={"/filial"}>
                Filiallar
              </Link>
            </li>
            <li>
              <Link className=" text-lg" href={"/about"}>
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link className=" text-lg" href={"/contact"}>
                Bog'lanish
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex xl:hidden items-center">
          <span className=" w-[40px] h-[40px] rounded-full bg-[#F1EFF4] flex justify-center items-center">
            <FaLocationDot />
          </span>
          <span>Yetkazib berish</span>
        </div>
        <Link href={"/cart"} className="flex items-center">
          <span className="w-[40px] h-[40px] rounded-full bg-[#F1EFF4] flex justify-center items-center">
            <BiSolidCart />
          </span>
          <span>0 so'm</span>
        </Link>
        <div className="w-[40px] h-[40px] xl:hidden rounded-full bg-[#F1EFF4] flex justify-center items-center">
          <FaUserLarge />
        </div>
      </div>
    </header>
  );
};

export default Header;
