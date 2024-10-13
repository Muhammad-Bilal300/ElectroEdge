import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Purchases = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Purchases" subHeading="Manage your purchases" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Create New Purchase Invoice"
        />
       
      </div>
    </div>
  );
};

export default Purchases;
