/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col  ">
      <div className="flex justify-between ">
        <h1 className="mb-4 text-3xl font-semibold text-center text-black dark:text-white">
          Explore Categories
        </h1>
        <Link href="/Events/new">
          <button
            type="button"
            className="focus:outline-none  text-white bg-green-accent hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create an Event
          </button>
        </Link>
      </div>

      {/* // dropdown */}

      <div className="flex  space-x-10 ">
        <div className="ml-0 p-0">
          <button
            id="dropdownDefaultButton2"
            data-dropdown-toggle="dropdown2"
            className="text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            TimeLine{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}

          <div
            id="dropdown2"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton2"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Today
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  This Weekend
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 7 days
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 30 days
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-2">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Carousel Items */}
          <div className="carousel-item active" data-carousel-item>
            <img
              src="https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?cs=srgb&dl=pexels-alex-andrews-271121-1983046.jpg&fm=jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute left-10 bottom-10 start-0 z-30">
          <h1 className="mb-1 text-3xl font-bold text-start text-white dark:text-white">
            CANEX
          </h1>
          <p className="text-white">
            This will be the event of the season
          </p>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;
