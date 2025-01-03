import React from "react";

const ActivityFeed = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Activity Feeds</h2>
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Alfredo Torres</p>
            <p className="text-sm text-gray-400">Playing God of War</p>
          </div>
        </div>
        {/* Repeat for other activities */}
      </div>
    </div>
  );
};

export default ActivityFeed;
