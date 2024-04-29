import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import Banner from "./(components)/Banner";
import EventCard from "./(components)/EventCard";
//fetching events
const getEvents = async () => {


  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
    console.log("baseUrl", baseUrl);
    const res = await fetch(`${baseUrl}/api/Events`, {
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
  const events = await getEvents();
  console.log(events);

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="bg-cover mt-9 block  w-3/4  md:w-10/12 sm:w-11/12 mx-auto">
        <HeroSection />
      </div>
      <div className=" md:w-10/12 mx-auto mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {events && events.map((event: any) => ( // Check if events exist
          <EventCard key={event._id} event={event} />
        ))}

      </div>
    </div>
  );
}

export default Home;


