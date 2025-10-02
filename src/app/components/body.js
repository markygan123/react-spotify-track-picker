import React from 'react'
import Card from './card'

const listOfSongs = [
  {
    title: "Bohemian Rhapsody",
    genre: "Rock",
    artist: "Queen"
  },
  {
    title: "Billie Jean",
    genre: "Pop",
    artist: "Michael Jackson"
  },
  {
    title: "Lose Yourself",
    genre: "Hip Hop",
    artist: "Eminem"
  },
  {
    title: "Shape of You",
    genre: "Pop",
    artist: "Ed Sheeran"
  },
  {
    title: "Smells Like Teen Spirit",
    genre: "Grunge",
    artist: "Nirvana"
  },
  {
    title: "Blinding Lights",
    genre: "Synthwave/Pop",
    artist: "The Weeknd"
  },
  {
    title: "Hotel California",
    genre: "Rock",
    artist: "Eagles"
  },
  {
    title: "All of Me",
    genre: "R&B",
    artist: "John Legend"
  },
  {
    title: "Thinking Out Loud",
    genre: "Pop",
    artist: "Ed Sheeran"
  },
  {
    title: "Humble",
    genre: "Hip Hop",
    artist: "Kendrick Lamar"
  }
];

function Body() {
  return (
    <div className='bg-red-200 h-screen flex gap-4 p-4'>
      {listOfSongs.map(song=>(
        <Card title={song.title} artist={song.artist} genre={song.genre}/>
      ))}
    </div>
  )
}

export default Body
