import React from "react";
import DashboardLayout from "./layout";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">Create and Start your AI Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-col-3 my-5"></div>
    </div>
  );
};

export default Dashboard;
