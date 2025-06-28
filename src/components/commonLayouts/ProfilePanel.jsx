import React, { useRef, useState } from 'react'

import NewsfeedIcon from "../icons/NewsfeedIcon"
import GroupsIcon from "../icons/GroupsIcon"
import PhotosIcon from "../icons/PhotosIcon"
import FriendsIcon from "../icons/FriendsIcon"
import FriendRequiestIcon from "../icons/FriendRequiestIcon"
import LogoutIcon from "../icons/LogoutIcon"
import ProfileIcon from '../icons/ProfileIcon'
import { Link } from 'react-router-dom'

  const contentArry = [
    {icon : <NewsfeedIcon/>, name : "Newsfeed"},
    {icon : <ProfileIcon/> , name : "Profile"},
    {icon : <GroupsIcon className=' fill-[#AFB0C0] transition duration-300 group-hover:fill-white'/> , name : "Groups"},
    {icon : <PhotosIcon/> , name : "Photos"},
    {icon : <FriendsIcon/> , name : "Friends"},
    {icon : <FriendRequiestIcon/> , name : "Friends Request"},
    {icon : <LogoutIcon/> , name : "Logout"}
  ]



const ProfilePanel = () => {
    let [isCover, setCover] = useState(true)
    const inputFileRef = useRef()
    const [imgSrc,setImgSrc] = useState("")

    const handleSelect = ()=>{
      inputFileRef.current.click()
    }

    const handleFileChange = (event)=>{
      
      let file = event.target.files[0]
      if (file) {
        let reader = new FileReader()
        reader.onload = (e)=>{
          
          console.log(e);
            setImgSrc(e.target.result)

           }
          reader.readAsDataURL(file)
        }
    }

  return (
    <div className=' w-[18.4275%]'>
          <div className={`h-[75px] w-full flex justify-center ${isCover ? "bg-[#45437F]" : "bg-white"}`}>
            <div className=' mt-[15px] h-[110px] w-[110px] cursor-pointer overflow-hidden rounded-[50%] bg-[#615DFA] border-white border-[10px]'>
               <img onClick={ handleSelect} className='h-[100%] w-[100%] bg-cover' src={imgSrc} alt="" />
               <input ref={inputFileRef} onChange={ handleFileChange} accept='image/*' type="file" name="profile" id=""  className='bg-amber-700 h-10 w-4xl'/>
            </div>
          </div>

          <div className='w-full mt-[65px]'>
             <h2 className=' text-black text-center text-base capitalize font-bold leading-normal font-poppins'>A B M Shawon Islam</h2>
             <p className=' text-center font-poppins text-[12px] font-medium leading-normal text-lavender-gray'>www.abm.com</p>
          </div>

          <div className=' mt-[42px] flex justify-center'>
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

          <ul className=' ml-6 mt-16 w-[268px]'>
            {contentArry.map((item,index)=>{
              return <li key={index}>
                        <Link  className=' flex w-full mb-[5px] py-[15px] px-5 box-border items-center gap-x-[29px] rounded-[10px] transition duration-300 bg-white group hover:bg-[#23D2E2]'>
                        {item.icon}
                        <p className=' font-poppins text-sm text-lavender-gray font-semibold leading-normal transition duration-300 group-hover:text-white'> {item.name} </p>
                        </Link>
                    </li>
             })}
          </ul>
    </div>
  )
}

export default ProfilePanel