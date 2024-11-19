"use client"
import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const data = {
    allocations: 25,
    movements: 15,
    returns: 8,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg text-indigo-400 mb-2">Total Allocations</h2>
              <p className="text-2xl font-bold text-white">{data.allocations}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg text-pink-400 mb-2">Total Movements</h2>
              <p className="text-2xl font-bold text-white">{data.movements}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg text-blue-400 mb-2">Total Returns</h2>
              <p className="text-2xl font-bold text-white">{data.returns}</p>
            </div>
          </div>
        );
      case "Allocations":
        return <p className="text-gray-300">Details about Asset Allocations.</p>;
      case "Movements":
        return <p className="text-gray-300">Details about Asset Movements.</p>;
      case "Returns":
        return <p className="text-gray-300">Details about Asset Returns.</p>;
      default:
        return <p className="text-gray-300">Select a tab to see details.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-900 bg-opacity-80 p-6 shadow-xl">
        <h2 className="text-xl font-bold text-indigo-400 mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              activeTab === "Home" ? "text-white" : "text-indigo-400"
            } hover:text-white transition`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "Allocations" ? "text-white" : "text-indigo-400"
            } hover:text-white transition`}
            onClick={() => setActiveTab("Allocations")}
          >
            Asset Allocations
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "Movements" ? "text-white" : "text-indigo-400"
            } hover:text-white transition`}
            onClick={() => setActiveTab("Movements")}
          >
            Asset Movements
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "Returns" ? "text-white" : "text-indigo-400"
            } hover:text-white transition`}
            onClick={() => setActiveTab("Returns")}
          >
            Asset Returns
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-indigo-400 mb-6">{activeTab}</h1>
        <div>{renderContent()}</div>
      </main>

      {/* Animated Background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="w-[20rem] h-[20rem] bg-indigo-500 opacity-40 rounded-full absolute top-16 left-32 animate-pulse"></div>
        <div className="w-[25rem] h-[25rem] bg-pink-500 opacity-40 rounded-full absolute bottom-20 right-32 animate-pulse"></div>
        <div className="w-[15rem] h-[15rem] bg-blue-500 opacity-40 rounded-full absolute top-10 right-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Dashboard;
