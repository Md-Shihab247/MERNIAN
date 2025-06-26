import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import ProfilePanel from './ProfilePanel'
import FriendsPanel from './FriendsPanel'
const Common = () => {
  return (
    <>
      <Header/>
      <div className=' flex justify-between'>
        <ProfilePanel/>
        <Outlet/>
        <FriendsPanel/>
      </div>
    </>
  )
}

export default Common





