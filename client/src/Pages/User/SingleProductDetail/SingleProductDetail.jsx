import React from "react";
import ProductImages from "./components/productImages/ProductImages";
import ProductDetails from "./components/productDetail/ProductDetail";
import RatingsAndReviews from "./components/ratingsAndReviews/RatingsAndReviews";
import Services from "./components/services/Services";
import RelatedProducts from "./components/relatedProducts/RelatedProducts";

const SingleProductDetail = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-x-4">
        <ProductImages />
        <ProductDetails />
      </div>
      <RatingsAndReviews />
      <Services />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductDetail;
