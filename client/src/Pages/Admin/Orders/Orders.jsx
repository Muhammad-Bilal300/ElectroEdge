import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Orders = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Orders" subHeading="Manage your orders" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText=""
          importAction={() => {}}
          importText=""
        />
      </div>
    </div>
  );
};

export default Orders;
