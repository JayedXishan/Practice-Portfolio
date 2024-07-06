import React from "react";

const NavBar = () => {
  return (
    <div className="lg:w-[1170px] mx-auto">
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <div className="border-l-2 border-[#55AD9B] px-4">
              <h3 className="text-xl font-bold">Sheik Jayed Uddin</h3>
              <p className="text-xs">FRONTEND WEB D E V E L O P E R</p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <div className="rounded-none hover:border-b-2 hover:border-[#55AD9B]">
                  <a href="">About</a>
                </div>
              </li>
              <li>
                <div className="rounded-none hover:border-b-2 hover:border-[#55AD9B]">
                  <a href="">Skills</a>
                </div>
              </li>
              <li>
                <div className="rounded-none hover:border-b-2 hover:border-[#55AD9B]">
                  <a href="">Projects</a>
                </div>
              </li>
              <li>
                <div className="rounded-none hover:border-b-2 hover:border-[#55AD9B]">
                  <a href="">Education</a>
                </div>
              </li>
              <li>
                <div className="rounded-none hover:border-b-2 hover:border-[#55AD9B]">
                  <a href="">Contact</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="ml-[40px]">
            <button className="px-4 py-2 border-2 border-[#55AD9B] text-[#55AD9B] hover:bg-[#55AD9B] hover:text-white">Resume</button>
          </div>
          <div className="dropdown relavite">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow absolute right-3"
            >
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
