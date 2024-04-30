// Use `import` instead of `require` for better static analysis and TypeScript support
import { useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import EventCard from "./components/EventCard";
import { BASE_API_URL } from "./constants";

// Using TypeScript, define the type of `events` state
interface Event {
  _id: string;
  // Define other properties as per your event structure
}

const Home = () => {
  // Initialize states with appropriate types and default values
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const baseUrl = BASE_API_URL;
        if (!baseUrl) {
          throw new Error("Base URL is not configured.");
        }

        // Using `fetch` API with `await` for asynchronous data fetching
        const res = await fetch(`${baseUrl}/api/Events`, {
          cache: "no-cache",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch events.");
        }

        // Parse response data
        const data: Event[] = await res.json();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        console.error("An error occurred while fetching events:", err);
        setError(err as string); // Set error message
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Separate conditional rendering for loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Banner />
      {/* Simplify classNames for better readability */}
      <div className="bg-cover mt-9 w-3/4 md:w-10/12 sm:w-11/12 mx-auto">
        <HeroSection />
      </div>
      {/* Utilize responsive grid layout */}
      <div className="md:w-10/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {events.map((event: Event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
