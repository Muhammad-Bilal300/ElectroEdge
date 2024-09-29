import React from "react";
import Hero from "./components/Hero/Hero";

const Home = () => {
  return (
    <div
      className="overflow-x-hidden w-[100%]"
      style={{ scrollbarWidth: "none" }}
    >
      <Hero />
      <div className="py-5">
<h3></h3>
      </div>
    </div>
  );
};

export default Home;
