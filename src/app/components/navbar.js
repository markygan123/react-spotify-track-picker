import React from "react";

function Navbar() {
  return (
    <div className="bg-white p-8 text-center flex justify-between items-center">
      <div>
        <p className="font-bold text-black text-2xl">SPOTIFY TRACK PICKER</p>
      </div>
      <div>
        <ul className="flex gap-8 text-gray-600">
          <li>Dashboard</li>
          <li>Playlist</li>
          <li>Artist</li>
          <li>Genres</li>
        </ul>
      </div>
      <div>
        <button className="bg-purple-500 text-white p-2 rounded-md">
          + Add Song
        </button>
      </div>
    </div>
  );
}

export default Navbar;
