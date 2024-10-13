import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Products = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Products" subHeading="Manage your products" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Add New Product"
        />
       
      </div>
    </div>
  );
};

export default Products;
