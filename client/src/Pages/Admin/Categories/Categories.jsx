import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Categories = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Categories" subHeading="Manage your categories" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Add New Category"
        />
      </div>
    </div>
  );
};

export default Categories;
