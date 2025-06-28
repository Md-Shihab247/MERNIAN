import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const PostComment = () => {
  return (
    <div className='w-[585px] bg-white rounded-b-[15px] overflow-hidden'>
        <div className=' w-full flex gap-x-3 pt-[10px] pl-[26px] pr-[33px] box-border'>
            <div className='h-[36px] w-[36px] bg-[#615DFA] border-2 border-[#D9D9D9] rounded-[50%]'>
                {/* <img src="#" alt="" className=' w-full h-full rounded-[50%] bg-cover' /> */}
            </div>
            <div className=' max-w-[476px]'>
                <p className=' text-[12px] px-0.5 font-poppins text-[#3E3F5E] font-normal leading-normal'> <span className=' font-medium'>Sohel rana</span>  It’s a always pleasure to do this streams with you. If we have at least half half the fun than last time it will be an incredible success!</p>
                <div className=' flex items-center'>
                    <div className=' flex items-center py-[15px]'>
                      <div className=' flex items-center'>
                        <img src="./images/like.png" alt="like" className=' relative left-[5px] z-50'/>
                        <img src="./images/wow.png" alt="wow" />
                      </div>
                      <span className=' ml-2.5 text-[12px] font-poppins text-black font-medium leading-normal'>4</span>
                    </div>

                    <div className=' ml-[14px] flex items-center gap-x-[22px] text-[12px] font-poppins text-lavender-gray font-medium leading-normal'>
                        <div className=' cursor-pointer'>React!</div>
                        <div className=' cursor-pointer'>Reply</div>
                        <div>15 minutes ago</div>
                    </div>
                    <div className=' relative left-[26px] cursor-pointer'>
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </div>

        <div className=' py-4 pl-11 w-full box-border bg-white flex gap-x-2 '>
            <div className='h-[36px] w-[36px] bg-[#615DFA] border-2 border-[#D9D9D9] rounded-[50%]'>
                {/* <img src="#" alt="" className=' w-full h-full rounded-[50%] bg-cover' /> */}
            </div>

            <div className=''>
                <p className=' text-[12px] px-0.5 font-poppins text-[#3E3F5E] font-normal leading-normal'> <span className=' font-medium'>Noyon</span> It’s great oppurtunity</p>
                <div className=' flex items-center mt-[13px]'>
                      <div className=' flex items-center'>
                        <img src="./images/like.png" alt="like" className=' relative left-[5px] z-50'/>
                        <span className=' ml-[18px] text-[12px] font-poppins text-black font-medium leading-normal'>1</span>
                      </div>

                    <div className=' ml-[18px] flex items-center gap-x-[22px] text-[12px] font-poppins text-lavender-gray font-medium leading-normal'>
                        <div className=' cursor-pointer'>React!</div>
                        <div className=' cursor-pointer'>Reply</div>
                        <div>1 minutes ago</div>
                    </div>
                    <div className=' relative left-[32px] cursor-pointer'>
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </div>

        <div className=' py-6 border-t border-b border-[#D9D9D9] '>
            <div className=' text-center text-[12px] font-poppins text-[#3E3F5E] font-normal leading-normal'>Load more comments <span className='text-[#01C7D9]'>9+</span></div>
        </div>
        <div className=' py-[18px] pl-[25px] pr-[27px] bg-white flex items-center gap-x-[19px] '>
            <div className='h-[36px] w-[36px] bg-[#615DFA] border-2 border-[#D9D9D9] rounded-[50%]'>
                {/* <img src="#" alt="" className=' w-full h-full rounded-[50%] bg-cover' /> */}
            </div>
            <input type="text" placeholder='Your reply ' className='w-full p-[15px] rounded-[13px] border border-[#D9D9D9] outline-hidden text-[12px] font-poppins text-[#D9D9D9] font-semibold leading-normal' />
        </div>
    </div>
  )
}

export default PostComment