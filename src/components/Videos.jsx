import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

const Videos = () => {
  return (
     <div className=' mt-[15px] pt-[19px] pb-[29px] px-[26px] bg-white w-[283px] box-border rounded-[15px]'>
                <div className='w-full flex justify-between'>
                    <p className=' text-[#3E3F5E] font-poppins text-sm leading-normal font-bold capitalize'>Videos <span className=' text-[#23D2E2]'> 7</span></p>
                    <BsThreeDots />
                </div>
               
                <div className=' mt-[19px] flex flex-col items-start gap-y-[19px]'>
                   <div className='flex items-center justify-center w-full h-[100px] rounded-[15px] bg-[#615DFA]'>
                      <span className='h-10 w-10 rounded-[50%] bg-[#181828] border-2 border-[#41EFFF] flex items-center justify-center'>
                        <FaPlay className='text-[13px] text-white'/>
                      </span>
                   </div>
                  
                   <div className='flex items-center justify-center w-full h-[100px] rounded-[15px] bg-[#24234B]'>
                      <span className='h-10 w-10 rounded-[50%] bg-[#181828] border-2 border-[#41EFFF] flex items-center justify-center'>
                        <FaPlay className='text-[13px] text-white'/>
                      </span>
                   </div>
                  
                   <div className='flex items-center justify-center w-full h-[100px] rounded-[15px] bg-[#615DFA]'>
                      <span className='h-10 w-10 rounded-[50%] bg-[#181828] border-2 border-[#41EFFF] flex items-center justify-center'>
                        <FaPlay className='text-[13px] text-white'/>
                      </span>
                   </div>
                  
                  
                </div>
            </div>
  )
}

export default Videos