import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import Banner from "./(components)/Banner";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
          
     <div className="bg-cover mt-9  w-3/4 mx-auto">
            <HeroSection />
          </div>
    </div>
  );
}
