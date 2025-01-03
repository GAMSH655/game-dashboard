import React from "react";

const GameLibrary = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Game Library</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Game"
            className="w-full rounded-lg"
          />
          <h3 className="mt-2 text-sm">Game Title</h3>
        </div>
        {/* Repeat for other games */}
      </div>
    </div>
  );
};

export default GameLibrary;
