import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Vendors = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Vendors" subHeading="Manage your vendors" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Add New Vendor"
        />
      </div>
    </div>
  );
};

export default Vendors;
