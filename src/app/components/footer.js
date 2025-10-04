import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white flex justify-between items-cente py-28 px-32">
      <div className="w-5/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">SpotifyTrackPeaker</h1>
        <p className="text-gray-400">
          Organize and manage your music collection with ease. Add, edit, and
          discover your favorite songs in a beautiful interface.
        </p>
        <div>
          {/* todo: Add 3 ICONS For Company Logo */}
          {/* <img>Twitter</img>
          <img>Facebook</img>
          <img>Instagram</img> */}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Features</h2>
        <ul className="flex flex-col gap-1 text-gray-400">
          <li>Add Songs</li>
          <li>Edit collection</li>
          <li>Create Playlist</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Support</h2>
        <ul className="flex flex-col gap-1 text-gray-400">
          <li>Help center</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
