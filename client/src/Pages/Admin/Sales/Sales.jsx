import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Sales = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Sales" subHeading="Manage your sales" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Create New Sale Invoice"
          importAction={() => {}}
          importText=""
        />
      </div>
    </div>
  );
};

export default Sales;
