"use client";


import React, { ChangeEvent, useState } from 'react'
import Banner from './Banner';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faEnvelope, faFlag, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const EventForm = ({ event }: any) => {
    const EDITMODE = event._id === "new" ? false : true;
    const router = useRouter();


    const initialState = {
        event_name: "",
        event_description: "",
        // banner_img: "",
        location: "",
        country: "",
        city: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        venue_name: "",
        location2: "",
        meeting_link: "",
        email: "",
        ticket_price: "",
        abbreviation: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        phone_number: "",
        website: "",
        facebook_link: "",
        instagram_link: "",
        twitter_link: "",
        other_info: "",
    }
    if (EDITMODE) {
        initialState["event_name"] = event.event_name;
        initialState["event_description"] = event.event_description;
        initialState["location"] = event.location;
        initialState["country"] = event.country;
        initialState["city"] = event.city;
        initialState["start_date"] = event.start_date;
        initialState["end_date"] = event.end_date;
        initialState["start_time"] = event.start_time;
        initialState["end_time"] = event.end_time;
        initialState["venue_name"] = event.venue_name;
        initialState["location2"] = event.location2;
        initialState["meeting_link"] = event.meeting_link;
        initialState["email"] = event.email;
        initialState["ticket_price"] = event.ticket_price;
        initialState["abbreviation"] = event.abbreviation;
        initialState["first_name"] = event.first_name;
        initialState["middle_name"] = event.middle_name;
        initialState["last_name"] = event.last_name;
        initialState["phone_number"] = event.phone_number;
        initialState["website"] = event.website;
        initialState["facebook_link"] = event.facebook_link;
        initialState["instagram_link"] = event.instagram_link;
        initialState["twitter_link"] = event.twitter_link;
        initialState["other_info"] = event.other_info;
    }



    const [formData, setFormData] = useState(initialState);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/Events", {
                method: "POST",
                body: JSON.stringify({ formData }),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                throw new Error("Something went wrong. Failed to create event.");
            }
            console.log("Form data:", formData);

        } catch (error) {
            console.error("Error occurred during form submission:", error);
        }
    };





    return (
        <div className="flex flex-col">
            <Banner />
            <div className="w-2/5  mx-auto mt-10">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="event_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Event Name
                        </label>
                        <input
                            type="text"
                            id="event_name"
                            name="event_name"

                            onChange={handleChange}
                            value={formData.event_name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Raha Fest"
                            required={true}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="event_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Description</label>
                        <textarea id="event_description" name="event_description" onChange={handleChange} value={formData.event_description} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe the Event..."></textarea>
                    </div>

                    <div className="mb-6">

                        <div className="flex  flex-col items-start justify-start w-full">
                            <label htmlFor="event_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Banner Image</label>

                            <label htmlFor="banner_img" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                onChange={handleChange}
                                value={formData.location}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="country"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                onChange={handleChange}
                                value={formData.country}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="company"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                onChange={handleChange}
                                value={formData.city}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Flowbite"
                                required
                            />
                        </div>

                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-4">
                        <div>
                            <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500 h-4 w-4" />
                                </div>
                                <input type="text" id="start_date"

                                    name="start_date"
                                    onChange={handleChange}
                                    value={formData.start_date}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500 h-4 w-4" />
                                </div>
                                <input type="text" id="end_date"
                                    name="end_date"
                                    onChange={handleChange}
                                    value={formData.end_date}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-500 h-4 w-4" />
                                </div>
                                <input type="text" id="start_time"
                                    name="start_time"
                                    onChange={handleChange}
                                    value={formData.start_time}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-500 h-4 w-4" />
                                </div>
                                <input type="text" id="end_time"
                                    name="end_time"
                                    onChange={handleChange}
                                    value={formData.end_time}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                        </div>

                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="venue_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Venue Name
                        </label>
                        <input
                            type="text"
                            id="venue_name"
                            name="venue_name"
                            onChange={handleChange}
                            value={formData.venue_name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nairobi"
                            required
                        />
                    </div>
                    <div className="flex flex-row gap-6 mb-6 ">
                        <div className="w-1/3">
                            <label
                                htmlFor="location2"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location2"
                                name="location2"
                                onChange={handleChange}
                                value={formData.location2}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className="w-2/3">
                            <label
                                htmlFor="meeting_link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Meeting Link
                            </label>
                            <input
                                type="text"
                                id="meeting_link"
                                name="meeting_link"
                                onChange={handleChange}
                                value={formData.meeting_link}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required
                            />
                        </div>


                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 h-4 w-4" />
                                </div>
                                <input type="email" id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ticket_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ticket Price</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FontAwesomeIcon icon={faMoneyBill} className="text-gray-500 h-4 w-4" />
                                </div>
                                <input type="text" id="ticket_price"
                                    name="ticket_price"
                                    onChange={handleChange}
                                    value={formData.ticket_price}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                        </div>


                    </div>
                    <h3 className="mb-3 font-bold text-lg">{"Organizer's Details"}</h3>
                    <label
                        htmlFor="location"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >

                        {"What's your Name?*"}
                    </label>

                    <div className="flex flex-row gap-6 mb-6 ">
                        <div className="w-1/5">

                            <input
                                type="text"
                                id="abbreviation"
                                name="abbreviation"
                                onChange={handleChange}
                                value={formData.abbreviation}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Mr"
                                required
                            />
                        </div>
                        <div className="w-2/5 ">

                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                onChange={handleChange}
                                value={formData.first_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="w-2/5">

                            <input
                                type="text"
                                id="middle_name"
                                name="middle_name"
                                onChange={handleChange}
                                value={formData.middle_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Middle Name (Optional)"
                                required
                            />
                        </div>
                        <div className="w-2/5">

                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                onChange={handleChange}
                                value={formData.last_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Last Name"
                                required
                            />
                        </div>


                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <FontAwesomeIcon icon={faFlag} className="w-4 h-4 " />
                                </span>
                                <input type="text" id="phone_number"
                                    name="phone_number"
                                    onChange={handleChange}
                                    value={formData.phone_number}
                                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="254706271861" />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="website"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Website URL
                            </label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                onChange={handleChange}
                                value={formData.website}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="flowbite.com"
                                required
                            />
                        </div>


                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                        <div>
                            <label
                                htmlFor="facebook_link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Facebook
                            </label>
                            <input
                                type="tel"
                                id="facebook_link"
                                name="facebook_link"
                                onChange={handleChange}
                                value={formData.facebook_link}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""

                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="instagram_link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Instagram                            </label>
                            <input
                                type="tel"
                                id="instagram_link"
                                name="instagram_link"
                                onChange={handleChange}
                                value={formData.instagram_link}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""

                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="twitter_link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Twitter
                            </label>
                            <input
                                type="url"
                                id="twitter_link"

                                name="twitter_link"
                                onChange={handleChange}
                                value={formData.twitter_link}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>

                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="other_info"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Other
                        </label>
                        <input
                            type="other_info"
                            id="other_info"
                            name="other_info"
                            onChange={handleChange}
                            value={formData.other_info}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""

                        />
                    </div>
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
                            type="submit"
                            onClick={handleSubmit}
                            className="text-white bg-green-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Publish
                        </button>
                    </div>




                </form>
            </div>
        </div>
    );
}

export default EventForm