import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import Banner from "./(components)/Banner";
import EventCard from "./(components)/EventCard";
//fetching events
const getEvents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Events", {
      cache: "no-cache",
    });
    const data = await res.json();
    console.log("Events:", data);
    return data;
  } catch (err) {
    console.error("Error fetching events:", err);
    return { error: "An error occurred while fetching events" };
  }
}

const Home = async () => {
  const  events  = await getEvents();
  console.log(events);

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="bg-cover mt-9  w-3/4 md:w-10/12 mx-auto">
        <HeroSection />
      </div>
      <div className=" md:w-10/12 mx-auto mt-10 grid  md:grid-cols-3 gap-2">
        {events && events.map((event: any) => ( // Check if events exist
          <EventCard key={event._id} event={event} />
        ))}

      </div>
    </div>
  );
}

export default Home;