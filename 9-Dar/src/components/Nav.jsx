import React from 'react'

const Nav = () => {
  return (
    <>
     <nav className='flex justify-around items-center mt-[30px]'>
     <h1 className='text-[#124F48] text-[36px]'>amid.</h1>
     <ul className='flex gap-[30px] text-[#124F48]'>
        <li>
            <a href="">About amid</a>
        </li>
        <li>
            <a href="">Features</a>
        </li>
        <li>
            <a href="">Portfolio</a>
        </li>
        <li>
            <a href="">Reviews</a>
        </li>
     </ul>
    <button className='bg-[#124F48] text-white w-[110px] h-[50px] rounded-3xl cursor-pointer'>Login</button>
     </nav>
    </>
  )
}

export default Nav