import React from "react";

const MostPlayed = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Most Played</h2>
      <ul className="space-y-3">
        <li className="flex items-center justify-between">
          <span>The Witcher 3</span>
          <span>3 hrs 34 min</span>
        </li>
        {/* Repeat for other games */}
      </ul>
    </div>
  );
};

export default MostPlayed;
