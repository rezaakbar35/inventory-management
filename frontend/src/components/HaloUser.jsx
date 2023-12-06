import React from 'react'
import placeholder from '../assets/placeholder.jpg'

const HaloUser = () => {
    const user = "placeholder"
  return (
    <div className='p-[20px] mt-[50px] flex haloContainer'>
        <img className='w-[50px] h-[50px] profilePicture rounded-full'
        src={placeholder}/>
        <div className='haloTexts'>
        <h1 className='ml-[10px] text-[2rem]'>{user}</h1>
        </div>
        <hr/>
    </div>
  )
}

export default HaloUser
