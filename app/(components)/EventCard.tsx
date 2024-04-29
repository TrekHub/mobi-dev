/* eslint-disable @next/next/no-img-element */
import { faFire, faStar, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons/faT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const EventCard = ({ event }: any) => {
  return (


    <Link href={`/Events/${event._id}`}>
      <div className=" bg-white rounded-sm  dark:bg-gray-800 m-5">

        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg"
          alt=""
        />

        <div className="flex  p-5 justify-start  ">
          <div className="w-1/3">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-accent dark:text-white">
              Nov
            </h5>


            <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
              24 - 26
            </h5>

          </div>

          <div className="px-3 flex flex-col justify-start">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {event.event_name}
            </h5>

            <p className="mb-1 font-medium text-gray-700 dark:text-gray-400">
              {event.location}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {event.start_date} - {event.end_date}
            </p>

            <div className="flex flex-row">
              <span className="flex flex-row">
                <FontAwesomeIcon icon={faTicket} className="w-5 h-5 mr-1" />
                {event.ticket_price}
              </span>
              <span className="flex flex-row ml-3">
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-1 text-purple-accent" />
                14 Interested
              </span>

            </div>



          </div>
        </div>
      </div>
    </Link>



  );
};

export default EventCard;
