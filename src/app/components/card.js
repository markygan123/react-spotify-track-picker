import React from 'react'

function Card({title, artist, genre}) {
  console.log(title, artist, genre)
  return (
    <div className='bg-white w-100 h-90 rounded-md flex justify-center '>
        <div className='flex flex-col text-center justify-center'>
            <img></img>
            <p>{title}</p>
            <p>{artist}</p>
            <p>{genre}</p>
        </div>
    </div>
  )
}

export default Card
