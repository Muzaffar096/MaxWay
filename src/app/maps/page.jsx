import Link from "next/link";
import React from "react";

const Maps = () => {
  return (
    <div>
      <div className="flex justify-between lg:flex-col my-10">
        <h2 className="text-3xl font-bold">Filiallar</h2>
        <div className="">
          <Link href={"/filial"} className=" p-2 px-10 rounded-full text-slate-800 bg-slate-200 font-medium">
            Ro'yxat
          </Link>
          <button className=" p-2 px-10 ml-5 rounded-full text-slate-800 bg-slate-200 font-medium">
            Xarita
          </button>
        </div>
      </div>
      <div className=" h-screen">
      <iframe
            className=" w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47963.34306422945!2d69.13672685623169!3d41.29343862000693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc7af9ea289%3A0x7364f8761707a212!2sMax%20Way!5e0!3m2!1sen!2s!4v1714951554867!5m2!1sen!2s"
              width="400"
              height="480"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
      </div>
    </div>
  );
};

export default Maps;
