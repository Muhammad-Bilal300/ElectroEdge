import React from "react";
import Hero from "./components/Hero/Hero";
import BestDeals from "./components/BestDeals/BestDeals";
import FlashSale from "./components/FlashSale/FlashSale";
import PopularSearch from "./components/PopularSearch/PopularSearch";
import RecentlyViewed from "./components/RecentlyViewed/RecentlyViewed";
import WeeklyPopularProducts from "./components/WeekyPopularProducts/WeeklyPopularProducts";

const Home = () => {
  return (
    <div className="w-[100%]" style={{ scrollbarWidth: "none" }}>
      <Hero />
      <BestDeals />
      <FlashSale />
      <PopularSearch />
      <RecentlyViewed />
      <WeeklyPopularProducts />
    </div>
  );
};

export default Home;
