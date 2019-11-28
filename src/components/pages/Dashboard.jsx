import React from "react";
import ArtistsTable from "../Tables/Artists/Artists";
import FestivalsTable from "../Tables/Festivals/Festivals";
import SalesTable from "../Tables/Sales/Sales";

const Dashboard = () => {
  return (
    <div>
      <SalesTable />
      <FestivalsTable />
      <ArtistsTable />
    </div>
  );
};

export default Dashboard;
