import React from 'react'
import hero from "../assets/hero.svg"

const Hero = () => {
  return (
    <>
     <div className='bg-[#E9FBF9] flex justify-center items-center p-[50px]'>
     <div>
        <h1 className='text-[64px] text-[#021D1A]'>Try Our Business Ideas to grow Rapidly</h1>
        <p className='text-[#464646] mt-3.5 mb-3.5'>We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan </p>
        <button className='w-[120px] h-[50px] cursor-pointer bg-[#FF823B] text-white rounded-3xl'>Get Started</button>
     </div>
     <img src={hero} alt="" />
     </div>
    </>
  )
}

export default Hero