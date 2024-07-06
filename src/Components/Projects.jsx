import { useState } from "react";
import { BiDetail } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Projects = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="lg:w-[1170px] lg:mx-auto mt-[200px]">
      <div>
        <div>
          <h3 className="ml-[20px] lg:ml-0 text-3xl font-extrabold mb-[20px]">Projects</h3>
        </div>

        <div className="mx-[4%] lg:mx-0 mt-[50px] space-y-4 lg:flex lg:justify-between lg:items-center">
          {/* card 1 */}

          <div className="relative card bg-base-100 lg:w-96 w-[350px] shadow-xl">
            <div
              className={
                active === 1
                  ? "absolute z-[10] top-[10%] card bg-base-100  shadow-xl"
                  : "hidden absolute card bg-base-100 w-96 shadow-xl"
              }
            >
              <div className="card-body">
                <h2 className="card-title">Medi Care</h2>
                <p>
                  Medicine selling website with admin ,seller,user control.
                  Payment with stripe is implemented.
                </p>

                <div className="px-2 font-semibold mt-[15px] border-l-2 border-l-[#55AD9B]">
                  <h3>Feature</h3>
                </div>
                <ul className="ml-4 list-disc">
                  <li>Authentication</li>
                  <li>Dashboard Functionality </li>
                  <li>Payment Method implemented</li>
                </ul>

                <div className="px-2 font-semibold mt-[15px] border-l-2 border-l-[#55AD9B]">
                  <h3>Technologies</h3>
                </div>
                <div>
                  <p>
                    React js, MongoDB, Express js, Stripe, Firebase, Tailwind
                  </p>
                </div>
                <button className="text-[#55AD9B]" onClick={() => setActive(0)}>
                  OK
                </button>
              </div>
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/4Mk02XL/medi-care.png"
                alt="Shoes"
                className="rounded-xl h-[200px]"
              />
            </figure>
            <div className="card-body items-center relative ">
              <h2 className="card-title text-center font-semibold">
                Medi Care
              </h2>
              <p className="text-[15px] text-left">
                Medicine selling website with admin ,seller,user control.
                Payment with stripe is implemented.
              </p>

              <div className=" mt-[15px] flex  items-center space-x-2">
                <a href="https://github.com/JayedXishan/Medicare-client">
                  <div className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] border-2 border-[#55AD9B] hover:border-none hover:bg-gray-700 rounded-full text-gray-700 hover:text-[#55AD9B] text-center flex justify-center items-center">
                    <FaGithubAlt />
                  </div>
                </a>

                <div
                  onClick={() => setActive(1)}
                  className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] bg-gray-700 hover:bg-white hover:text-gray-700 hover:border-2 hover:border-[#55AD9B] rounded-full text-[#55AD9B] text-center flex justify-center items-center"
                >
                  <BiDetail />
                </div>

                <a href="https://finalassign-auth.web.app ">
                  <div className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] border-2 border-[#55AD9B] hover:border-none hover:bg-gray-700 rounded-full hover:text-[#55AD9B] text-center flex justify-center items-center">
                    <FaEye />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div className="relative card bg-base-100 lg:w-96 w-[350px] shadow-xl">
            <div
              className={
                active === 2
                  ? "absolute z-[10] card bg-base-100 shadow-xl"
                  : "hidden absolute card bg-base-100 w-96 shadow-xl"
              }
            >
              <div className="card-body">
                <h2 className="card-title">Pictura</h2>
                <p>
                  A craft selling website where user can add , update ,delete
                  craft and can add to the cart.
                </p>

                <div className="px-2 font-semibold mt-[15px] border-l-2 border-l-[#55AD9B]">
                  <h3>Feature</h3>
                </div>
                <ul className="ml-4 list-disc">
                  <li>Authentication</li>
                  <li>CRUD Operation </li>
                  <li>Filter with categories</li>
                </ul>

                <div className="px-2 font-semibold mt-[15px] border-l-2 border-l-[#55AD9B]">
                  <h3>Technologies</h3>
                </div>
                <div>
                  <p>React js, MongoDB, Express js, Firebase, Tailwind</p>
                </div>
                <button className="text-[#55AD9B]" onClick={() => setActive(0)}>
                  OK
                </button>
              </div>
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/wJvq1RJ/pictura.png"
                alt="Shoes"
                className="rounded-xl h-[200px]"
              />
            </figure>
            <div className="card-body items-center relative ">
              <h2 className="card-title text-center font-semibold">Pictura</h2>
              <p className="text-[15px] text-left">
                A craft selling website where user can add , update ,delete
                craft and can add to the cart.
              </p>

              <div className=" mt-[15px] flex justify-end items-center space-x-2">
                <a href="https://github.com/JayedXishan/Pictura-client">
                  <div className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] border-2 border-[#55AD9B] hover:border-none hover:bg-gray-700 rounded-full text-gray-700 hover:text-[#55AD9B] text-center flex justify-center items-center">
                    <FaGithubAlt />
                  </div>
                </a>

                <div
                  onClick={() => setActive(2)}
                  className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] bg-gray-700 hover:bg-white hover:text-gray-700 hover:border-2 hover:border-[#55AD9B] rounded-full text-[#55AD9B] text-center flex justify-center items-center"
                >
                  <BiDetail />
                </div>

                <a href="https://pictura-auth.web.app/">
                  <div className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] border-2 border-[#55AD9B] hover:border-none hover:bg-gray-700 rounded-full hover:text-[#55AD9B] text-center flex justify-center items-center">
                    <FaEye />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className=" relative card bg-base-100 lg:w-96 w-[350px] shadow-xl">
            <div
              className={
                active === 3
                  ? "absolute z-[10] card bg-base-100  shadow-xl"
                  : "hidden absolute card bg-base-100 w-96 shadow-xl"
              }
            >
              <div className="card-body">
                <h2 className="card-title">Volunteer Hub</h2>
                <p>
                  Volunteer management website. User can add or request for
                  Volunteer.
                </p>

                <div className="px-2 font-semibold mt-[15px] border-l-2 border-l-[#55AD9B]">
                  <h3>Feature</h3>
                </div>
                <ul className="ml-4 list-disc">
                  <li>Authentication</li>
                  <li>CRUD Operation </li>
                  <li>Dark Theme</li>
                </ul>

                <div className="px-2 font-semibold mt-[15px] border-l-2 border-l-[#55AD9B]">
                  <h3>Technologies</h3>
                </div>
                <div>
                  <p>React js, MongoDB, Express js, Firebase, Tailwind</p>
                </div>
                <button className="text-[#55AD9B]" onClick={() => setActive(0)}>
                  OK
                </button>
              </div>
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/vwmHqTz/Volunteer-Hub.png"
                alt="Shoes"
                className="rounded-xl h-[200px]"
              />
            </figure>
            <div className="card-body items-center relative ">
              <h2 className="card-title text-center font-semibold">
                VolunteerHub
              </h2>
              <p className="text-[15px] text-left">
                Volunteer management website. User can add or request for
                Volunteer.
              </p>

              <div className=" mt-[15px] flex justify-end items-center space-x-2">
                <a href="https://github.com/JayedXishan/VolunteerHub-client">
                  <div className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] border-2 border-[#55AD9B] hover:border-none hover:bg-gray-700 rounded-full text-gray-700 hover:text-[#55AD9B] text-center flex justify-center items-center">
                    <FaGithubAlt />
                  </div>
                </a>
                <div
                  onClick={() => setActive(3)}
                  className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] bg-gray-700 hover:bg-white hover:text-gray-700 hover:border-2 hover:border-[#55AD9B] rounded-full text-[#55AD9B] text-center flex justify-center items-center"
                >
                  <BiDetail />
                </div>
                <a href="https://volunteerhub-auth.web.app ">
                  <div className="hover:w-[40px] hover:h-[40px] w-[30px] h-[30px] border-2 border-[#55AD9B] hover:border-none hover:bg-gray-700 rounded-full hover:text-[#55AD9B] text-center flex justify-center items-center">
                    <FaEye />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
