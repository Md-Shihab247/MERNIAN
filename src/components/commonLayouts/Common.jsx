import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import ProfilePanel from './ProfilePanel'
const Common = () => {
  return (
    <>
      <Header/>
      <div className=' flex'>
        <ProfilePanel/>
        <Outlet/>
      </div>
    </>
  )
}

export default Common





