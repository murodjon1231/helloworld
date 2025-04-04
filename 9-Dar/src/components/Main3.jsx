import React from 'react'
import phot from "../assets/phot.svg"
import pho from "../assets/pho.svg"


const Main3 = () => {
  return (
    <>
     <div className='mt-[200px]'>
           <h1 className='text-center text-[#021D1A] text-[44px]'>We Publish Blogs Every Week</h1>
        <p className='text-center text-[#464646] text-[18px]'>We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan </p>
     </div>
     <div className='flex justify-center items-center gap-[50px] mt-[200px]'>
      <img src={phot} alt="" />
      <img src={pho} alt="" />
     </div>
    </>
  )
}

export default Main3