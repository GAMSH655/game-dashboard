import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import GameLibrary from "./components/GameLibrary";
import ActivityFeed from "./components/ActivityFeed";
import PartyChat from "./components/PartyChat";
import MostPlayed from "../src/Components/MostPlayed ";
function App() {
   return (
     <div className="flex flex-col lg:flex-row h-screen bg-gray-900 text-white">
       {/* Sidebar */}
       <Sidebar />
 
       {/* Main Content */}
       <div className="flex flex-col flex-1 p-4 lg:p-6 space-y-6">
         {/* Header */}
         <Header />
 
         {/* Main Dashboard */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Left Column */}
           <div className="lg:col-span-8 space-y-6">
             <GameLibrary />
           </div>
 
           {/* Right Column */}
           <div className="lg:col-span-4 space-y-6">
             <ActivityFeed />
             <PartyChat />
             <MostPlayed />
           </div>
         </div>
       </div>
     </div>
   );
 }
 export default App