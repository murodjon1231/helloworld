import React from 'react'
import im1 from "../assets/1.svg"
import im2 from "../assets/2.svg"
import im3 from "../assets/3.svg"



const Main = () => {
    return (
        <div className='pt-[100px] pl-[50px] pr-[50px]'>
            <h1 className='text-6xl text-[#DC052D]'>Tokens purchased</h1>
            <img src={im1} alt="" />
            <h1 className='text-6xl text-[#DC052D]'>Economics</h1>
            <div className='flex justify-around items-center'>
                <img src={im2} alt="" />
                <p className='text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className='flex justify-around items-center'>
                <img src={im3} alt="" />
                <p className='text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}
export default Main