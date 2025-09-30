import React from 'react'
import Card from './card'

function Body() {
  return (
    <div className='bg-red-200 h-screen flex gap-4 p-4'>
      <Card title={'I had some help'} artist={'Post Malone'} genre={'Country'}/>
      <Card title={'Superman'} artist={'Morgan Wallen'} genre={'Country'}/>
      <Card title={'I\'m Done'} artist={'Skusta Clee'} genre={'Hip Hop'}/>
    </div>
  )
}

export default Body
