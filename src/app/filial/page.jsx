import Filials from "@/components/Filials/Filials";
import React from "react";

const Filial = () => {
  return (
    <>
      <div className="flex justify-between lg:flex-col my-10">
        <h2 className="text-3xl font-bold">Filiallar</h2>
        <div className="">
          <button className=" p-2 px-10 rounded-full text-slate-800 bg-slate-200 font-medium">
            Ro'yxat
          </button>
          <button className=" p-2 px-10 ml-5 rounded-full text-slate-800 bg-slate-200 font-medium">
            Xarita
          </button>
        </div>
      </div>
      <Filials />
    </>
  );
};

export default Filial;
