import React from "react";
import { RiComputerFill, RiPaintFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div  className="lg:w-[1170px] lg:mx-auto  mt-[100px] mb-[100px]">
      <div className="ml-[20px] lg:ml-0">
        <h3 className="text-3xl font-extrabold mb-[20px]">About</h3>
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-[50%]">
            <p>
            As a passionate Frontend Developer, I specialize in creating visually appealing and highly functional web experiences. With a strong command of HTML, CSS, JavaScript, and Tailwind, I excel at building responsive and dynamic websites. My expertise in React.js allows me to develop sophisticated, interactive user interfaces.
            </p>
          </div>
          <div className="mt-[45px] mx-[20%] lg:mx-0 lg:mt-0 lg:flex lg:items-center lg:space-x-4 space-y-4">
            <div>
              <div className="w-[200px] h-[200px] shadow-lg p-4">
                <div className="">
                  <RiComputerFill className="mx-auto mt-[40px] mb-[6px] text-2xl text-[#55AD9B]" />
                  <h3 className="text-center font-semibold">Web development</h3>
                </div>
                <p className="mt-[12px] text-xs text-center">
                  I am Junior level MERN stack developer.
                </p>
              </div>
              <div className="w-[200px] h-[200px] shadow-lg p-4">
                <div className="">
                  <FaCode className="mx-auto mt-[40px] mb-[6px] text-2xl text-[#55AD9B]" />
                  <h3 className="text-center font-semibold">Problem Solver</h3>
                </div>
                <p className="mt-[12px] text-xs text-center">
                  Solved 500+ promlem in codeforces and codechef.
                </p>
              </div>
            </div>
            <div className="w-[200px] h-[200px] shadow-lg p-4">
              <div className="">
                <RiPaintFill className="mx-auto mt-[40px] mb-[6px] text-2xl text-[#55AD9B]" />
                <h3 className="text-center font-semibold">Graphic Designer</h3>
              </div>
              <p className="mt-[12px] text-xs text-center">
                I am a design contributor at Png tree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
