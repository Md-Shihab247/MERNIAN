import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const AboutMe = () => {
  return (
    <div className=' py-[29px] px-[26px] bg-white w-[283px] box-border rounded-[15px]'>
        <div className='w-full flex justify-between'>
            <p className=' text-[#3E3F5E] font-poppins text-sm leading-normal font-bold capitalize'>About Me</p>
            <BsThreeDots />
        </div>
        <p className=' mt-[29px] text-lavender-gray text-[12px] font-normal leading-normal text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-poppins'>
            Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.
        </p>

        <div className=''>
            <div className='about-me-details'>
            <span className=' font-bold'>Joined:</span>
             <p>22 November 2008</p>
            </div>
            <div className='about-me-details'>
            <span className=' font-bold'>City:</span>
             <p>Dhaka</p>
            </div>
            <div className='about-me-details'>
            <span className=' font-bold'>Age:</span>
             <p>18 years</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe