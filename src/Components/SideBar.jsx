import React from "react";
import Ps from "../assets/Ps.png"
import {FaUser} from "react-icons/fa6"
const Sidebar = () => {
  return (
    <div className="w-20 h-full bg-gray-800 flex flex-col items-center py-6 space-y-6">
      <button className="bg-blue-600 p-4 rounded-full">
        <i className="fab fa-playstation"></i>
      </button>
      <i className="fas fa-gamepad text-gray-400 text-xl"></i>
      <i className="fas fa-comments text-gray-400 text-xl"></i>
        <FaUser  className="text-gray-400 text-xl"/> 
    </div>
  );
};

export default Sidebar;
