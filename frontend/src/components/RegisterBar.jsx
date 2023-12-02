import React from 'react'

const RegisterBar = () => {
  return (
    <div className=" relative">
      <div className="absolute left-0 right-0 bg-white h-1/2" />
      <div className=" container mx-auto relative max-w-5xl bg-neutral-50 rounded-lg px-12 py-10 flex items-center justify-between">
        <div>
          <div className="text-3xl font-medium mb-4 text-displayText">
            Unlock Special Features: Register Now!
          </div>
          <div className="font-normal text-xs text-displayText">
            Start Your Adventure Exclusive Fun Awaits
          </div>
        </div>
        <button className="py-4 px-6 bg-primary rounded-md text-white drop-shadow-xl hover:bg-primary transform hover:scale-110">
          Register Now
        </button>
      </div>
    </div>
  )
}

export default RegisterBar
