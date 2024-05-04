import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";

import logo from "../../../public/logo.svg";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto container my-10">
      <div className="flex items-center lg:flex-col gap-10 mb-10">
        <Link href={"/"}>
          <Image src={logo} alt="Site Logo" width={50} height={50} />
        </Link>
        <nav className=" flex justify-center w-full">
          <ul className="flex gap-10">
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
      <hr />
      <div className="flex justify-between mt-6">
        <p className=" text-slate-600">
          © Delever 2020 - 2024 Barcha huquqlar himoyalangan
        </p>
        <div className="flex gap-5">
          <Link href={"https://www.instagram.com/"}>
            <FaInstagram className=" text-[25px] opacity-60 hover:text-purple-950 cursor-pointer" />
          </Link>
          <Link href={"https://www.facebook.com/"}>
            <FaFacebook className=" text-[25px] opacity-60 hover:text-purple-950 cursor-pointer" />
          </Link>
          <Link href={"https://www.youtube.com/"}>
            <GrYoutube className=" text-[25px] opacity-60 hover:text-purple-950 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
