
import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <button className='bg-white text-black p-1 px-4 text-lg rounded-lg hover:bg-opacity-50'> ▶️Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-1 px-4 text-lg bg-opacity-50 rounded-lg'> More Info</button>
    </div>
    
  )
}

export default VideoTitle;