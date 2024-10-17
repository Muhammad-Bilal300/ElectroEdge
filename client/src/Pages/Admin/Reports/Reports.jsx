import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Reports = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Reports" subHeading="Manage your reports" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Generate New Report"
          importAction={() => {}}
          importText=""
        />
      </div>
    </div>
  );
};

export default Reports;
