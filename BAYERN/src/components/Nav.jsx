import React from 'react'
import logo from "../assets/logo.svg"

const Nav = () => {
  return (
    <div className='flex justify-around items-center pt-[30px]'>
        <img src={logo} alt="" />
        <div className='flex items-center gap-[30px]'>
        <ul className='flex gap-[30px] text-white'>
            <li>
                <a className='hover:text-[#DC052D]' href="">HOME</a>
            </li>
            <li>
                <a className='hover:text-[#DC052D]' href="">ABOUT THE CLUB</a>
            </li>
            <li>
                <a className='hover:text-[#DC052D]' href="">FAQ</a>
            </li>
            <li>
                <a className='hover:text-[#DC052D]' href="">NEWS</a>
            </li>
            <li>
                <a className='hover:text-[#DC052D]' href="">RULES</a>
            </li>
            <li>
                <a className='hover:text-[#DC052D]' href="">CONTACTS</a>
            </li>
        </ul>
        <button className='w-[90px] h-[40px] bg-[#DC052D] text-white rounded-2xl'>LOGIN</button>
        <button className='w-[90px] h-[40px] bg-[#0066B2] text-white rounded-2xl'>SIGN UP</button>
        </div>
    </div>
  )
}

export default Nav