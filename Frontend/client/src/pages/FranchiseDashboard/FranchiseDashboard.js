import React from "react";
import Dashboard from "../../components/FranchiseDashboard/Dashboard";
import NewOrders from "../../components/FranchiseDashboard/NewOrders";

function FranchiseDashboard() {
  return (
    <div className="flex flex-col gap-[25px]">
      <Dashboard />
      <NewOrders />
    </div>
  );
}

export default FranchiseDashboard;
