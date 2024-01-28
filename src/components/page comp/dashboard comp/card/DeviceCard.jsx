import React from "react";
import { BsFillDeviceSsdFill } from "react-icons/bs";
import { TbReload } from "react-icons/tb";

const DeviceCard = () => {
  return (
    <section className="max-[1024px]:hidden">
      <div className="">
        <div className="flex absolute w-[80px] h-[100px] bg-[#0499a3] mb-[8rem] items-center justify-center rounded-lg">
          <BsFillDeviceSsdFill className="w-9 h-9 text-white" />
        </div>
        <div className="flex flex-col w-[250px] h-[200px] bg-[#041433] mt-[2rem] rounded-3xl shadow-lg shadow-[#58ffff]">
          <div className="flex flex-col gap-2 ml-[6.5rem] mt-6">
            <div className="flex items-center gap-2">
              <h1 className="text-white text-sm">Device Online</h1>
            </div>
            <h1 className="text-white text-3xl">0</h1>
          </div>
          <div className="flex flex-col mt-[2.5rem] items-center">
            <div className="border border-b border-x-[7rem]"></div>
            <div className="flex items-center gap-2 text-white mt-6">
              <TbReload className="w-4 h-4"/>
              <h1 className="text-base">Last Update</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceCard;