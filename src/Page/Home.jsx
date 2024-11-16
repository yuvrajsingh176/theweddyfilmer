import React from "react";
import HomeMainVideo from "../components/Home/HomeMainVideo";
import Summery from "../components/Home/Summery";
import FeaturesStory from "../components/Home/FeaturesStory";
import HomeShowcaseFilm from "../components/Home/HomeShowcaseFilm";
import InstragramPost from "../components/Home/InstagramPost";
import HomeEnquire from "../components/Home/HomeEnquire";
import Clients from "../components/Home/Clients";

const Home = () => {
  return (
    <div className="bg-[#F0EEEA]">
      <HomeMainVideo />
      <Summery />
      <div>
        <div className="text-center font-semibold mt-20 mb-5 uppercase text-3xl">
          the weddyfilemer stories
        </div>
        <FeaturesStory />
      </div>
      <HomeShowcaseFilm/>
      <InstragramPost/>
      <HomeEnquire/>
      {/* <Clients /> */}
    </div>
  );
};

export default Home;
