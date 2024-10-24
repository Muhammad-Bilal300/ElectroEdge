import React, { useEffect, useState } from "react";

import Services from "./components/services/Services";
import RelatedProducts from "./components/relatedProducts/RelatedProducts";
import RatingsAndReviews from "./components/ratingsAndReviews/RatingsAndReviews";
import ProductDetail from "./components/productDetail/ProductDetail";
import ProductImages from "./components/productImages/ProductImages";

const SingleProductDetail = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts
  return (
    <div className="w-full lg:max-w-[80%] mx-auto py-6 px-4 lg:px-0 ">
      <div className="flex flex-col lg:flex-row gap-x-4 ">
        <ProductImages />
        <ProductDetail />
      </div>
      <RatingsAndReviews />
      <Services />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductDetail;
