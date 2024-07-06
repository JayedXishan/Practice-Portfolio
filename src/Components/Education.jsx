import React from "react";

const Education = () => {
  return (
    <div className="lg:w-[1170px] mx-auto mt-[200px]">
      <div>
        <div className="mb-[100px]">
          <h3 className=" text-center text-2xl font-extrabold">
            Educations
          </h3>
        </div>
        <div
          className="relative  max-w-4xl p-6  xl:flex mx-auto  bg-gray-700 text-white"
          
        >
          <div className="p-3 pr-0 lg:border-r-2 border-[#55AD9B]">
            <h3 className="text-3xl font-semibold">
              International Islamic University Chittagong
            </h3>
            <h3 className="text-[18px] font-medium">Dept. of Computer Science and Engineering</h3>
            <p className="mt-[15px] w-[80%] text-sm lg:border-l-2 border-[#55AD9B] px-2">
              I am an undergraduate student. Completing my Bachelor from  International Islamic University Chittagong,  dept of CSE. Currently I am at my last semester. I have Obtain CGPA: 3.53 out of 4.00 . Session : 2021 - 2024
            </p>
          </div>
          <div className="flex items-center gap-3 p-3" >
            <img className="w-[250px] h-[150px]" src="https://i.ibb.co/XzqMLFL/International-Islamic-University-Chittagong-Logo-Vector.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
