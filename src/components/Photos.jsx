import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Photos = () => {
  return (
     <div className=' mt-[15px] pt-[19px] pb-[29px] px-[26px] bg-white w-[283px] box-border rounded-[15px]'>
            <div className='w-full flex justify-between'>
                <p className=' text-[#3E3F5E] font-poppins text-sm leading-normal font-bold capitalize'>Photos <span className=' text-[#23D2E2]'>37</span></p>
                <BsThreeDots />
            </div>
           
            <div className=' mt-[17px] flex gap-y-[15px] justify-between flex-wrap'>
               <div className=' w-[105px] h-[100px] rounded-[15px] bg-[#615DFA] bg-cover overflow-hidden'>
                 <img src="" alt="" className='w-full h-full'/>
               </div>
               <div className=' w-[105px] h-[100px] rounded-[15px] bg-[#24234B] bg-cover overflow-hidden'>
                 <img src="" alt="" className='w-full h-full'/>
               </div>
               <div className=' w-[105px] h-[100px] rounded-[15px] bg-[#615DFA] bg-cover overflow-hidden'>
                 <img src="" alt="" className='w-full h-full'/>
               </div>
               <div className=' w-[105px] h-[100px] rounded-[15px] bg-[#24234B] bg-cover overflow-hidden'>
                 <img src="" alt="" className='w-full h-full'/>
               </div>
               <div className=' w-[105px] h-[100px] rounded-[15px] bg-[#615DFA] bg-cover overflow-hidden'>
                 <img src="" alt="" className='w-full h-full'/>
               </div>
               <div className=' w-[105px] h-[100px] rounded-[15px] bg-[#41EFFFCC] bg-cover overflow-hidden flex items-center justify-center'>
                 {/* <img src="" alt="" className='w-full h-full'/> */}
                 <p className=' text-white font-poppins text-[12px] font-bold leading-normal'>32+</p>
               </div>
            </div>
        </div>
  )
}

export default Photos