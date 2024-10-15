import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Brands = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Brands" subHeading="Manage your brands" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Add New Brand"
        />
      </div>
    </div>
  );
};

export default Brands;
