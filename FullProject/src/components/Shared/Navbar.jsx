import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  const LinksData = [
    {
      title: 'Home',
      link: '/'
    }
  ];
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-primary/5'>
<div className='h-full w-1/4 flex flex-row justify-center items-center text-1xl font-bold text-primary'>
<img 
  src="https://ik.imagekit.io/sns3305/SDPPRO/916ab313-26c3-445c-8cc8-23619e755280-1527074242569-school-pic.png?updatedAt=1723047549513" 
  alt="SKCT ELEARN Logo" 
  style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='h-full w-3/4 flex flex-row justify-end items-center text-1xl font-bold gap-6 ml-10'>
        {LinksData.map((data, index) => (
          <li key={index} className="list-none">
            <NavLink to={data.link}>
              {data.title}
            </NavLink>
          </li>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
