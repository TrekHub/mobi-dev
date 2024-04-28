import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import Banner from "./(components)/Banner";
import EventCard from "./(components)/EventCard";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="bg-cover mt-9  w-3/4 mx-auto">
        <HeroSection />
      </div>
      <div className="w-3/4 mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />

      </div>
    </div>
  );
}
