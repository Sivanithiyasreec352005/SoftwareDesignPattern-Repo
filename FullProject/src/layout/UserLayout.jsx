import Leftbar from '../components/User/LeftBar'
// import Topbar from '@/components/User/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Leftbar />
      <div className='w-5/6 flex justify-center items-center flex-col'>
        {/* <Topbar /> */}
        <div className='h-[92vh] w-full'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}
export default UserLayout