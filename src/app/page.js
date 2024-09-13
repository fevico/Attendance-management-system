"use client"
import { useState } from "react";
import { LuArrowRightToLine } from "react-icons/lu";
import Logo from "@/component/reusable/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@/component/reusable/Button";

export default function Home() {
  const [toggle, setToggle] = useState(false)

  // Function to handle the toggle
  const handleToggle = () => {
    setToggle((prev) => !prev); // Toggle between true and false
  };

  return (
    <>
      <main className="p-3 relative">
        <nav className="flex justify-between fixed bg-white w-full top-0 left-0 items-center px-3 lg:px-5 py-3 shadow-lg">
          <Logo />

          <button onClick={handleToggle} className="relative grid place-items-center md:hidden">
            {toggle ? (
              <IoCloseOutline size={35} /> // Show close icon when toggled
            ) : (
              <RxHamburgerMenu size={30} /> // Show hamburger icon when not toggled
            )}
          </button>
          {toggle && (
            <div className="md:flex gap-3 flex-col absolute bg-white w-1/3 right-0  top-[10%] items-center justify-between h-auto">
              <Button icon={<LuArrowRightToLine color="#65A9B2" />} onClick={''} style={'border border-[#090B0E] font-[700] gap-1 mb-2 px-7 py-1 text-xl text-[#65A9B2]'} text={'Log In'} />
              <Button icon={<LuArrowRightToLine />} onClick={''} style={'border border-[#546881] bg-[#65A9B2] font-[600] gap-1 px-6 py-1 text-xl text-white'} text={'Sign Up'} />
            </div>
          )}

          <div className="hidden md:flex gap-3">
            <Button icon={<LuArrowRightToLine color="#65A9B2" />} onClick={''} style={'border border-[#090B0E] font-[700] gap-1 px-6 py-1 text-xl text-[#65A9B2]'} text={'Log In'} />
            <Button icon={<LuArrowRightToLine />} onClick={''} style={'border border-[#546881] bg-[#65A9B2] font-[600] gap-1 px-6 py-1 text-xl text-white'} text={'Sign Up'} />
          </div>
        </nav>

        <div className="bg-[#233B3E] my-5 h-[500px] md:h-[400px] flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start w-full mt-[18%] md:mt-[10%] lg:mt-[7%] rounded-md p-3 md:pt-9 text-white">
          <div className="md:w-[80%] lg:pl-5">
            <h1 className="text-center md:text-start text-[12px] md:text-[28px] font-light">
              Welcome to Stubborn Academy! Your Gateway to Seamless Learning and Management
            </h1>
            <p className="text-center text-[15px] font-extralight mt-2 text-[#D2D2D2] md:text-[24px] md:text-start md:w-[83%]">
              Access your courses, manage attendance, and stay connected with your school community — all in one place.
            </p>

            <Button icon={<LuArrowRightToLine />} onClick={''} style={'border border-[#546881] bg-[#65A9B2] font-[600] gap-1 px-6 py-1 text-xl text-white hidden lg:flex mt-12'} text={'Get Started'} />
          </div>
        </div>
      </main>

      <footer className="w-full bg-[#090B0E] h-[200px] flex justify-start items-center px-5">
        <Logo style={'mt-[-50px] logo-lg'} />
      </footer>
    </>
  );
}
