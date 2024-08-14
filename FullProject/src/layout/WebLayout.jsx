
import { Outlet } from 'react-router-dom'
import InstructorLeftBar from '../components/Instructor/InstructorLeftbar'

const WebLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <InstructorLeftBar />
      <div className='w-5/6 flex justify-center items-center flex-col'>
        <div className='h-[92vh] w-full'>
     
        <Outlet />
        </div>
      </div>
    </div>
  )
}
export default WebLayout