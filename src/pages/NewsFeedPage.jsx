import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import AboutMe from '../components/AboutMe'
import Photos from '../components/Photos'
import Videos from '../components/Videos'

const NewsFeedPage = () => {
  return (
    <>
      <div className='w-[76.6585%] bg-[#F7F7FB] p-8'>
        <ProfileBanner/>
        <div className=' flex mt-[33px]'>
            <div>
              <AboutMe/>
              <Photos/>
              <Videos/>
            </div>
        </div>
      </div>
    </>
  )
}

export default NewsFeedPage