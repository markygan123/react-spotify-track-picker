import React from "react";
import Card from "./card";

const listOfSongs = [
  {
    title: "Bohemian Rhapsody",
    genre: "Rock",
    artist: "Queen",
  },
  {
    title: "Billie Jean",
    genre: "Pop",
    artist: "Michael Jackson",
  },
  {
    title: "Lose Yourself",
    genre: "Hip Hop",
    artist: "Eminem",
  },
  {
    title: "Shape of You",
    genre: "Pop",
    artist: "Ed Sheeran",
  },
  {
    title: "Smells Like Teen Spirit",
    genre: "Grunge",
    artist: "Nirvana",
  },
  {
    title: "Blinding Lights",
    genre: "Synthwave/Pop",
    artist: "The Weeknd",
  },
  {
    title: "Hotel California",
    genre: "Rock",
    artist: "Eagles",
  },
  {
    title: "All of Me",
    genre: "R&B",
    artist: "John Legend",
  },
  {
    title: "Thinking Out Loud",
    genre: "Pop",
    artist: "Ed Sheeran",
  },
  {
    title: "Humble",
    genre: "Hip Hop",
    artist: "Kendrick Lamar",
  },
];

function Body() {
  return (
    //div
    // search navbar section
    // cards section
    // statistics
    <div>
      {/*  search navbar section */}
      <div className="bg-white px-32 py-4 flex justify-between">
        <input
          placeholder="Search songs, artists, or genres..."
          className="py-2 px-2 w-84 border border-gray-200 rounded-md"
        ></input>
        <div className="flex gap-3">
          <select className="py-2 px-2 border border-gray-200 rounded-md">
            <option>All Genres</option>
          </select>
          <select className="py-2 px-2 border border-gray-200 rounded-md">
            <option>Sort by: Recent</option>
          </select>
          <button className="bg-yellow-400 py-2 px-6 rounded-md text-white font-semibold">
            Filter
          </button>
        </div>
      </div>

      {/*   // collection */}
      <div className="bg-gray-200 px-32 max-w-screen flex flex-wrap gap-30 p-4 justify-between min-h-max">
        {listOfSongs.map((song, index) => (
          <Card
            key={index}
            title={song.title}
            artist={song.artist}
            genre={song.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
