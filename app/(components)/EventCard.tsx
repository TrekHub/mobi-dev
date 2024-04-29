/* eslint-disable @next/next/no-img-element */
import { faFire, faStar, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons/faT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const EventCard = ({ event }: any) => {


  function formatDateDay(date: Date): string {
    return date.toLocaleString('en-US', {
      day: 'numeric',
      month: "long"


    });
  }

  function getDayOfMonth(date: any): string {

    const formatted = new Date(date);
    const dayOfMonth = formatted.getDate();
    return dayOfMonth.toString();
  }

  function getMonthInWords(date: any): string {
    const formatted = new Date(date);
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    const monthIndex = formatted.getMonth();
    return monthNames[monthIndex];
  }


  return (


    <Link href={`/Events/PreviewEvent/${event._id}`}>
      <div className=" bg-white rounded-sm  dark:bg-gray-800 m-5">

        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg"
          alt=""
        />

        <div className="flex  p-5 justify-start  ">
          <div className="w-1/3">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-accent dark:text-white">
            {getMonthInWords(event.start_date)}
            </h5>


            <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
              {getDayOfMonth(event.start_date)} - {getDayOfMonth(event.end_date)}
            </h5>

          </div>

          <div className="px-3 flex flex-col justify-start">

            <h5 className="mb-2 text-2xl md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {event.event_name}
            </h5>

            <p className="mb-1 font-medium  md:text-sm text-gray-700 dark:text-gray-400">
              {event.location}
            </p>
            <p className="mb-3 font-normal  md:text-sm text-gray-700 dark:text-gray-400">
              {event.start_time} - {event.end_time}
            </p>

            <div className="flex flex-row">
              <span className="flex flex-row">
                <FontAwesomeIcon icon={faTicket} className="w-5 h-5 mr-1" />
                {event.ticket_price}
              </span>
              <span className="flex flex-row ml-3  md:text-sm">
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-1   text-purple-accent" />
                14
              </span>

            </div>



          </div>
        </div>
      </div>
    </Link>



  );
};

export default EventCard;
