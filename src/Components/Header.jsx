import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        placeholder="Search anything you want..."
        className="w-1/2 px-4 py-2 rounded-lg bg-gray-700 text-gray-300"
      />
      <button className="bg-blue-600 px-4 py-2 rounded-lg">Start Stream</button>
      <div className="flex items-center space-x-4">
        <i className="fas fa-bell text-gray-400"></i>
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
