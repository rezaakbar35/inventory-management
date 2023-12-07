import React from 'react'

const NotificationBox = () => {

  return (
    <>
    <h2 className='text-start mb-[25px]'>Notifications</h2>
    <div className='w-[250px] h-[350px] bg-background rounded-xl'>
        <div className='border-b border-black h-[100px] p-2 text-start text-black'>
            <h3 className='font-bold'>From: Admin</h3>
            <p className='line-clamp-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea consectetur eligendi praesentium quibusdam illum alias quis dicta cumque tempora officiis consequuntur laudantium reiciendis, eveniet dolore explicabo repudiandae, voluptatibus quos. Quae!</p>
        </div>
    </div>
    </>
  )
}

export default NotificationBox;
