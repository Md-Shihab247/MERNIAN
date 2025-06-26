import React from 'react'
import { BiLogoTwitter } from 'react-icons/bi'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io'
import Button from "../components/Butoon"
import { Link } from 'react-router-dom'
const ProfileBanner = () => {
  return (
    <div className=' w-full bg-white rounded-b-[10px]'>
       <div className=' w-full h-[425px] rounded-t-[10px] '>
           <div className=' w-full h-[300px] rounded-t-[10px] bg-[#45437F]'>
              <img src="" alt="" className='h-full w-full rounded-[10px]'/>
           </div>

           <div className=' flex justify-between relative w-full'>
                <div className=' mt-[65px] ml-[65px] flex justify-center'>
                    <div className='flex'>
                        <div className='mr-6'>
                        <h6 className='profile-post-followrs'>930</h6>
                        <span className='profile-gmail'>Friends</span>
                    </div>
                    <div className=' px-6 relative before:absolute before:left-0  before:top-[8px] before:h-[30px] before:w-[1px] before:border-l before:border-[#AFB0C0] after:absolute after:right-0  after:top-[8px] after:h-[30px] after:w-[1px] after:border-l after:border-[#AFB0C0]'>
                        <h6 className='profile-post-followrs'>87</h6>
                        <span className='profile-gmail'>Posts</span>
                    </div>
                    <div className='ml-6'>
                        <h6 className='profile-post-followrs'>1k</h6>
                        <span className='profile-gmail'>Followers</span>            
                    </div>
                    </div>
                </div>
                
                <div className=' absolute left-[50%] top-[-81px] translate-x-[-50%]'>
                  <div className=' h-[142px] w-[142px] cursor-pointer overflow-hidden rounded-[50%] bg-[#615DFA] border-white border-[10px]'>
                    <img className='h-[100%] w-[100%] bg-cover' alt="" />
                  </div>
                  <div className=' text-center relative left-[-10px]'>
                    <h2 className=' text-black text-base capitalize font-bold leading-normal font-poppins'>A B M Shawon Islam</h2>
                    <p className=' font-poppins text-[12px] font-medium leading-normal text-lavender-gray'>www.abm.com</p>
                  </div>
                </div>

                <div className=' absolute flex gap-x-4 right-[27px] top-[-25px]'>
                  <Button className=" text-white cursor-pointer font-poppins text-sm font-semibold leading-normal px-[52px] py-[15px] bg-[#615DFA] rounded-[7px]" text="Add Friend"/>
                  <Button className=" text-white cursor-pointer font-poppins text-sm font-semibold leading-normal px-[52px] py-[15px] bg-[#23D2E2] rounded-[7px]" text="Send Message"/>
                </div>

                <div className=' flex gap-x-3 relative top-[62px] right-[114px]'>
                    <Link>
                      <div className='social-media-icon bg-[#3763D2]'>
                        <IoLogoFacebook className=' text-white' /> 
                      </div>
                    </Link>
                    <Link>
                      <div className='social-media-icon bg-[#F8468D]'>
                        <FaInstagram className=' text-white'/> 
                      </div>
                    </Link>
                    <Link>
                      <div className='social-media-icon bg-[#1ABCFF]'>
                        <BiLogoTwitter className=' text-white'/>
                      </div>
                    </Link>
                    <Link>
                      <div className='social-media-icon bg-[#FD434F]'>
                        <FaYoutube className=' text-white'/> 
                      </div>
                    </Link>      
                </div>
           </div>
       </div>
    </div>
  )
}

export default ProfileBanner