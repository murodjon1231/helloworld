import React from 'react'
import log from "../assets/log.svg"

const Hero = () => {
  return (
    <div className='flex justify-around items-center mt-[200px] pb-[70px]'>
     <div className='w-[600px]'>
        <h1 className='text-white text-8xl'>FC BAYERN FAN TOKEN</h1>
        <p className='text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     </div>
     <div>
        <img src={log} alt="" />
     </div>
    </div>
  )
}

export default Hero