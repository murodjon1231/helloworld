import React from 'react'
import more from "../assets/more.svg"
import more2 from "../assets/m2.svg"


const Main2 = () => {
    return (
        <>
            <div className='flex justify-center gap-[80px] pl-[80px] pr-[80px] mt-[200px]'>
                <div>
                    <h1 className='text-[#021D1A] text-[60px]'>We Worked With <span className='text-[#FF823B] w-[400px]'>100+</span> Company Over <span className='text-[#FF823B]'>10</span> Years</h1>
                    <img src={more} alt="" />
                    <h1 className='text-[#021D1A] text-[24px] mt-[50px]'>JobHub Job Finding Website </h1>
                    <p className='text-[#464646] text-[18px] mt-[10px]'>This website has become one of the best ux interface  for users with an beautiful ui and also lucrative fot upcoming startups in the sectors</p>
                    <button className='bg-[#FF823B] text-white w-[150px] h-[50px] cursor-pointer rounded-2xl mt-[10px]'>View More Work</button>
                </div>
                <div className=''>
                    <h1 className='text-[#021D1A] text-[18px] mt-[50px]'>Completed Full
                        Projects</h1>
                    <h1 className='text-[#FF823B] text-[16px]'>From 789+ Companies</h1>
                    <h1 className='text-[#021D1A] text-[18px] mt-[50px]'>Completed Full
                        Projects</h1>
                    <h1 className='text-[#FF823B] text-[16px]'>From 789+ Companies</h1>
                    <h1 className='text-[#021D1A] text-[18px] mt-[50px]'>Completed Full
                        Projects</h1>
                    <h1 className='text-[#FF823B] text-[16px]'>From 789+ Companies</h1>
                    <h1 className='text-[#021D1A] text-[18px] mt-[50px]'>Completed Full
                        Projects</h1>
                    <h1 className='text-[#FF823B] text-[16px]'>From 789+ Companies</h1>
                    <img className='w-[600px]' src={more2} alt="" />
                    <h1 className='text-[#021D1A] text-[24px] mt-[50px]'>CENT - Payment App Landing Website </h1>
                    <p className='text-[#464646] text-[18px] mt-[10px]'>This website has become one of the best ux interface
                        for users with an beautiful ui and also lucrative fot
                        upcoming startups in the sectors</p>
                </div>
            </div>
        </>
    )
}

export default Main2