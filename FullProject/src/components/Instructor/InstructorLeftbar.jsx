import { Book, BookAIcon, LayoutDashboard, Power, Users } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
const InstructorLeftbar = () => {

    const InstructorLinks = [
        {
            title: 'Dashboard',
            link: '/instructor/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Courses',
            link: '/instructor/courses',
            icon: Book
        }
        , {
            title: 'Users',
            link: '/instructor/page',
            icon: Users
        },
        {
            title:'Assignment',
            link:'/instructor/assignment',
            icon:BookAIcon
        },
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
            <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
             
              <img src="https://ik.imagekit.io/sns3305/SDPPRO/916ab313-26c3-445c-8cc8-23619e755280-1527074242569-school-pic.png?updatedAt=1723047549513" class="w-12 h-auto" />
</div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {
                    InstructorLinks.map((data, index) => (
                        <NavLink key={index} to={data.link}  className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button className='p-5  bg-red-500/5 hover:bg-red-500/10 font-bold  w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>

        </div>
    )
}

export default InstructorLeftbar