import React from 'react'
import placeholder from '../assets/placeholder.jpg'
import './HaloUser.css'

const HaloUser = () => {
    const user = "placeholder"
  return (
    <div className='w-80 h-40 flex haloContainer'>
        <img className='profilePicture rounded-full'
        src={placeholder}/>
        <div className='haloTexts'>
        <h2>Halo,</h2>
        <h1>{user}</h1>
        </div>
    </div>
  )
}

export default HaloUser
