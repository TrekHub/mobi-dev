"use cl"

import { useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import Banner from "./(components)/Banner";
import EventCard from "./(components)/EventCard";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
        if (!baseUrl) {
          throw new Error("Base URL is not configured.");
        }

        const res = await fetch(`${baseUrl}/api/Events`, {
          cache: "no-cache",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch events.");
        }

        const data = await res.json();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        // console.error("An error occurred while fetching events:", err);
        setError(null);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Banner />
      <div className="bg-cover mt-9 block w-3/4 md:w-10/12 sm:w-11/12 mx-auto">
        <HeroSection />
      </div>
      <div className="md:w-10/12 mx-auto mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {events.map((event: any) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
