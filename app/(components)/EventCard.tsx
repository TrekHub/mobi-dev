/* eslint-disable @next/next/no-img-element */
import { faFire, faStar, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons/faT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EventCard = () => {
  return (
    <div className=" bg-white rounded-sm  dark:bg-gray-800 m-5">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg"
          alt=""
        />
      </a>
      <div className="flex  flex-row p-5 justify-between">
        <div className="w-2/3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-accent dark:text-white">
              Nov
            </h5>
          </a>
          <a href="#">
            <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
              24 - 26
            </h5>
          </a>
        </div>

        <div className="px-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-1 font-medium text-gray-700 dark:text-gray-400">
            Nairobi, Kenya
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            8:30 AM - 5:00 PM
          </p>

          <div className="flex flex-row">
            <span className="flex flex-row">
              <FontAwesomeIcon icon={faTicket} className="w-5 h-5 mr-1" />
              KSH 1400
            </span>
            <span className="flex flex-row ml-3">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-1 text-purple-accent" />
              14 Interested
            </span>

          </div>
          

         
        </div>
      </div>
    </div>
  );
};

export default EventCard;
