import React from "react";

const PartyChat = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Party Chat</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <p>Daniel Gallego: "Stay there. I'm coming..."</p>
        </div>
        {/* Repeat for other chats */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PartyChat;
