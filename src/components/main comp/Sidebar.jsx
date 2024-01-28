"use client"
import Link from "next/link";
import {
  MdDashboard,
  MdBarChart,
  MdInbox,
  MdVerifiedUser,
} from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="max-[1024px]:hidden">
        <div className="flex flex-col fixed w-[300px] h-[600px] gap-[5rem] mt-[1rem] ml-[1rem] bg-slate-200 rounded-3xl shadow-xl shadow-slate-500">
          <div className="flex px-8 mt-[3rem]">
            <h1 className="font-[Montserrat] font-bold text-2xl">Fixiot</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-[2rem] px-8">
              <Link
                href="/dashboard"
                className="flex gap-2 items-center text-lg"
              >
                <MdDashboard />
                <h1 className="font-[Lato]">Dashboard</h1>
              </Link>
              <Link
                href="/information"
                className="flex gap-2 items-center text-lg"
              >
                <MdBarChart />
                <h1 className="font-[Lato]">Sensor Info</h1>
              </Link>
              <Link href="/users" className="flex gap-2 items-center text-lg">
                <MdVerifiedUser />
                <h1 className="font-[Lato]">Pengguna</h1>
              </Link>
              <Link href="/device" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Device</h1>
              </Link>
              <Link href="/set-device" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Config</h1>
              </Link>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="min-[1024px]:hidden max-[850px]:hidden">
        <div>
          <div
            className={`fixed w-64 h-screen bg-gray-800 text-white p-4  left-0 transition-transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex px-[50px] mt-[7px]">
                <h1 className="font-[Montserrat] font-bold text-2xl">Fixiboard</h1>
            </div>
            <ul className="flex flex-col gap-[2rem] px-8 mt-[5rem]">
              <Link
                href="/dashboard"
                className="flex gap-2 items-center text-lg"
              >
                <MdDashboard />
                <h1 className="font-[Lato]">Dashboard</h1>
              </Link>
              <Link
                href="/monitoring"
                className="flex gap-2 items-center text-lg"
              >
                <MdBarChart />
                <h1 className="font-[Lato]">Monitoring</h1>
              </Link>
              <Link href="/login" className="flex gap-2 items-center text-lg">
                <MdVerifiedUser />
                <h1 className="font-[Lato]">Pengguna</h1>
              </Link>
              <Link href="/device" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Device</h1>
              </Link>
              <Link href="/config" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Config</h1>
              </Link>
            </ul>
          </div>
          
        </div>
        <button
            className={`absolute text-${
              isOpen ? "white" : "black"
            } mt-6 px-8 focus:outline-none`}
            onClick={toggleSidebar}
          >
            ☰
          </button>
      </section>

      <section className="min-[850px]:hidden max-[640px]:hidden">
        <div>
          <div
            className={`fixed w-64 h-screen bg-gray-800 text-white p-4  left-0 transition-transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex px-[50px] mt-[7px]">
                <h1 className="font-[Montserrat] font-bold text-2xl">Fixiboard</h1>
            </div>
            <ul className="flex flex-col gap-[2rem] px-8 mt-[5rem]">
              <Link
                href="/dashboard"
                className="flex gap-2 items-center text-lg"
              >
                <MdDashboard />
                <h1 className="font-[Lato]">Dashboard</h1>
              </Link>
              <Link
                href="/monitoring"
                className="flex gap-2 items-center text-lg"
              >
                <MdBarChart />
                <h1 className="font-[Lato]">Monitoring</h1>
              </Link>
              <Link href="/login" className="flex gap-2 items-center text-lg">
                <MdVerifiedUser />
                <h1 className="font-[Lato]">Pengguna</h1>
              </Link>
              <Link href="/device" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Device</h1>
              </Link>
              <Link href="/config" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Config</h1>
              </Link>
            </ul>
          </div>
          
        </div>
        <button
            className={`absolute text-${
              isOpen ? "white" : "black"
            } mt-6 px-8 focus:outline-none`}
            onClick={toggleSidebar}
          >
            ☰
          </button>
      </section>
      <section className="min-[640px]:hidden">
      <div>
          <div
            className={`fixed w-64 h-full bg-gray-800 text-white p-4  left-0 transition-transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex px-[15px] mt-[50px]">
                <h1 className="font-[Montserrat] font-bold text-2xl">Fixiboard</h1>
            </div>
            <ul className="flex flex-col gap-[2rem] px-8 mt-[5rem]">
              <Link
                href="/dashboard"
                className="flex gap-2 items-center text-lg"
              >
                <MdDashboard />
                <h1 className="font-[Lato]">Dashboard</h1>
              </Link>
              <Link
                href="/monitoring"
                className="flex gap-2 items-center text-lg"
              >
                <MdBarChart />
                <h1 className="font-[Lato]">Monitoring</h1>
              </Link>
              <Link href="/login" className="flex gap-2 items-center text-lg">
                <MdVerifiedUser />
                <h1 className="font-[Lato]">Pengguna</h1>
              </Link>
              <Link href="/device" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Device</h1>
              </Link>
              <Link href="/config" className="flex gap-2 items-center text-lg">
                <MdInbox />
                <h1 className="font-[Lato]">Config</h1>
              </Link>
            </ul>
          </div>
          
        </div>
        <button
            className={`absolute text-${
              isOpen ? "white" : "black"
            } mt-6 px-8 focus:outline-none`}
            onClick={toggleSidebar}
          >
            ☰
          </button>
      </section>
    </>
  );
};

export default Sidebar;