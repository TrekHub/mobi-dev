/* eslint-disable @next/next/no-img-element */
import { faAdd, faCalendar, faClock, faFlag, faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const PreviewEvent = () => {
  return (
    <div className='w-5/6 mx-auto flex flex-col'>
      <h1 className='mt-10 mb-6 text-center font-extrabold text-3xl'>Event Preview</h1>

      <div className="">
        <div>
          <img className="w-full max-h-[500px] rounded-xl" src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg" alt="" />
        </div>

      </div>
      <div className="flex justify-between">
        <div className="flex flex-col mt-10">
          <h1 className="text-3xl font-extrabold">Event Name</h1>
          <p className="mt-3  text-xl font-semibold">Date and Time</p>

          <span className="inline-flex items-center mt-5 text-sm text-gray-900  rounded-s-md">
            <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 " /> <span className="ml-3 text-lg text-gray-600 font-medium">Saturday, 2 December 2023</span>
          </span>

          <span className="inline-flex items-center mt-2 text-sm text-gray-900  rounded-s-md">
            <FontAwesomeIcon icon={faClock} className="w-4 h-4 " /> <span className="ml-3 text-lg text-gray-600 font-medium">6:30 PM - 9:30 PM</span>
          </span>
          <span className="ml-3 mt-2 text-lg text-green-accent font-medium">+ Add to Calender</span>
        </div>

        <div className="flex flex-col mt-10">
          <button
            type="button"
            className="text-white bg-green-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="inline-flex items-center mt-2 text-sm text-white  rounded-s-md">
              <FontAwesomeIcon icon={faAdd} className="w-4 h-4 " /> <span className="ml-3 text-sm text-white font-medium">  Share This Event</span>
            </span>

          </button>
          <p className="mt-3  text-xl font-semibold">Ticket Information</p>
          <span className="inline-flex items-center mt-2 text-sm text-gray-900  rounded-s-md">
            <FontAwesomeIcon icon={faTicket} className="w-4 h-4 " /> <span className="ml-3 text-lg text-gray-600 font-medium"> Ksh. 200 each</span>
          </span>

        </div>
      </div>




      <p className="mt-3  text-xl font-semibold">Location</p>
      <span className="inline-flex items-center mt-2 text-sm text-gray-900  rounded-s-md">
        <FontAwesomeIcon icon={faLocation} className="w-4 h-4 " /> <span className="ml-3 text-lg text-gray-600 font-medium">Museam Hill, Nairobi, Kenya</span>
      </span>
      <div className="mt-3">
        <div>
          <img className="w-2/5 max-h-[300px] rounded-xl" src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" />
        </div>

      </div>
      <p className="mt-3  text-xl font-semibold">Hosted by</p>
      <div className="flex space-x-5">
        <img className="mt-4 w-36 h-36 rounded-full" src="https://storage.needpix.com/rsynced_images/portrait-3315767_1280.jpg" alt="Rounded avatar" />
        <div>

          <p className="mt-3  text-xl font-bold">Teddy Omondi</p>

          <div className="flex space-x-3 mt-4">
            <button
              type="button"
              className="text-black  border-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="inline-flex items-center mt-2 text-sm text-white  rounded-s-md">
                <span className="ml-3 text-sm text-black font-medium">Contact</span>
              </span>

            </button>  <button
              type="button"
              className="text-white bg-green-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="inline-flex items-center mt-2 text-sm text-white  rounded-s-md">
                <FontAwesomeIcon icon={faAdd} className="w-4 h-4 " /> <span className="ml-3 text-sm text-white font-medium">Follow</span>
              </span>

            </button>
          </div>

        </div>
      </div>

      <p className="mt-3  text-xl font-semibold">Event Description</p>
      <p className="mt-3 font-normal  w-1/3 text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ut accusantium dicta explicabo quia deleniti itaque qui facilis dolores delectus. Placeat, earum. Adipisci tempore explicabo rem, repellat minus consequuntur impedit?</p>

      <div className="flex flex-row justify-end mb-10 space-x-3">

<Link href="/Events/PreviewEvent">
    <button
        type="button"
        className="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
        Preview
    </button>
</Link>

<button
    type="button"
    // onClick={handleSubmit}
    className="text-white bg-green-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
    Publish
</button>
</div>







    </div>
  )
}

export default PreviewEvent