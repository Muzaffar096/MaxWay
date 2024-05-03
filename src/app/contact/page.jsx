import Image from "next/image";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

import qrCode from "../../../public/qr-code.svg";

const Contacts = () => {
  return (
    <div className="my-10">
      <h3 className="text-3xl font-bold">Bog'lanish</h3>
      <div className=" bg-[#8198A7] max-w-[300px] h-[300px] rounded-xl p-9 my-10">
        <Image
          className=" rounded-md"
          src={qrCode}
          alt="QR Code"
          width={100}
          height={100}
        />
        <p className=" text-[18px] my-4 text-white font-semibold">
          Telegramda sharh qoldiring yoki savol bering
        </p>
        <span className="flex items-center text-white">
          <FaTelegramPlane className=" text-[25px] text-white" />
          @maxwaymasterfood_bot
        </span>
      </div>
      <h4 className="text-2xl font-bold">Yagona aloqa markazi</h4>
      <p className=" text-lg font-medium mt-2">+998712005400</p>
    </div>
  );
};

export default Contacts;
