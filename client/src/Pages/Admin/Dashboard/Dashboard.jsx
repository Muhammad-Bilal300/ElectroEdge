import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Dashboard" subHeading="Manage your dashboard" />
      </div>
    </div>
  );
};

export default Dashboard;
