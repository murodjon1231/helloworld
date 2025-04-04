import React from 'react'
import logo from "../assets/logo.svg"
import Vector from "../assets/Vector.svg"

const Main = () => {
  return (
    <>
     <div className='flex justify-center mt-[200px]'>
     <img src={logo} alt="logo" />
     </div>

     <div className='flex justify-center items-center pl-[100px] pr-[100px] mt-[200px]'>
        <h1 className='text-[#021D1A] text-[44px]'>Exactly Everything You
        Need For Business</h1>
        <p className='text-[#464646]'>We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan </p>
     </div>

     <div className='flex justify-center gap-[50px] mt-[200px] pl-[120px] pr-[120px]'>
      
      <div className=''>
       <img src={Vector} alt="" />
       <h1 className='text-[#021D1A] text-[24px]'>Business Growing Support</h1>
       <p  className='text-[#021D1A] text-[18px] mt-[10px]  mb-[10px]'>Get every necessary support to grow as
       business startup</p>
       <h1 className='text-[#021D1A] text-[18px]'>Learn More</h1>
      </div>

      <div className=''>
       <img src={Vector} alt="" />
       <h1 className='text-[#021D1A] text-[24px]'>Business Growing Support</h1>
       <p  className='text-[#021D1A] text-[18px] mt-[10px]  mb-[10px]'>Get every necessary support to grow as
       business startup</p>
       <button className='bg-[#FF823B] text-white w-[120px] h-[50px] cursor-pointer rounded-2xl'>Learn More</button>
      </div>

      <div className=''>
       <img src={Vector} alt="" />
       <h1 className='text-[#021D1A] text-[24px]'>Business Growing Support</h1>
       <p  className='text-[#021D1A] text-[18px] mt-[10px]  mb-[10px]'>Get every necessary support to grow as
       business startup</p>
       <h1 className='text-[#021D1A] text-[18px]'>Learn More</h1>
      </div>

     </div>
    </>
  )
}

export default Main