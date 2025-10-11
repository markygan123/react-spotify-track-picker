import React from "react";

function Hero() {
  return (
    <div className="min-h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-32 text-white flex flex-col gap-4">
      <h1 className="text-3xl font-extrabold">Manage Your Music Collection</h1>
      <p>
        Organize, Edit, and Discover your favorite songs in one beautiful
        interface
      </p>
      <div className="flex gap-8 ">
        <div className="px-6 py-2 bg-gray-100/25 rounded-md ">
          <h3 className="font-bold">24</h3>
          <p className="text-xs">Total Songs</p>
        </div>
        <div className="px-6 py-2 bg-gray-100/25 rounded-md ">
          <h3 className="font-bold">12</h3>
          <p className="text-xs">Artists</p>
        </div>
        <div className="px-6 py-2 bg-gray-100/25 rounded-md ">
          <h3 className="font-bold">8</h3>
          <p className="text-xs">Genres</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
