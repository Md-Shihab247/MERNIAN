import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import AboutMe from '../components/AboutMe'

const AboutPage = () => {
  return (
    <div className='w-[76.6585%] bg-[#F7F7FB] p-8'>
        <ProfileBanner/>
        <div className=' flex mt-[33px]'>
            <div>
              <AboutMe/>
            </div>
        </div>
      </div>
  )
}

export default AboutPage