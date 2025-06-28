import React from 'react'
import StatusBarIcon from './icons/StatusBarIcon'
import GroupIcon from "./icons/GroupsIcon"
import { FaCamera } from 'react-icons/fa'
import ImageIcon from './icons/ImageIcon'
import Button from "./Butoon"
const Status = () => {
  return (
    <div className='w-[585px] mb-[12px]'>
        <div className='w-full flex'>
            <button className=' cursor-pointer flex items-center justify-center gap-x-4 w-[50%] text-lavender-gray rounded-tl-[15px] bg-white py-[29px] duration-400 group hover:text-white hover:bg-[#615DFA]'>
                <StatusBarIcon/>
                <span className=' font-inter text-[12px] font-bold leading-normal'>Status</span>
            </button>
            <button className=' cursor-pointer flex items-center justify-center gap-x-4 text-lavender-gray w-[50%] bg-white py-[29px] rounded-tr-[15px] duration-400 group hover:text-white hover:bg-[#615DFA]'>
                <GroupIcon className={"fill-[#D9D9D9] duration-400 group-hover:fill-[#F8F8F8]"}/>
                <span className=' font-inter text-[12px] font-bold leading-normal'>Product Upload</span>
            </button>
        </div>
        <textarea placeholder='Hi, A B M Shawon Islam, Share your post ...' className=' w-full min-h-[150px] bg-[#FCFCFD] resize-none p-[25px] box-border font-inter text-[12px] text-lavender-gray font-normal leading-normal outline-hidden border-hidden'></textarea>
        <div className=' w-full px-7 py-[18px] flex justify-between items-center relative top-[-6px] bg-white rounded-b-[15px]'>
            <div className=' flex gap-x-5'>
                <FaCamera  className=' text-xl'/>
                <ImageIcon/>
            </div>
            <div className=' flex gap-x-5'>
                <Button className={" text-white font-inter text-[12px] font-bold leading-normal w-30 h-10 flex items-center justify-center rounded-[6px] bg-[#181828]"} text={"Discard"}/>
                <Button className={" text-white font-inter text-[12px] font-bold leading-normal w-30 h-10 flex items-center justify-center rounded-[6px] bg-[#615DFA]"} text={"Post"}/>
            </div>
        </div>
    </div>
  )
}

export default Status