
import { NavLink, useNavigate } from 'react-router-dom';

const InstructorNavbar = () => {
  const navigate = useNavigate();
  const AdminLinks = [
    { title: 'Manage Courses', link: '/instructor/dashboard' },
    { title: 'Manage Users', link: '/admin/users' },
    { title: 'Manage Tutors', link: '/admin/tutor' },
    { title: 'Enrollment', link: '/admin/enrollment' }
  ];

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="h-screen w-1/6 flex flex-col shadow-sm shadow-primary pt-[8vh]  fixed top-0 left-0 bg-white">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col justify-start items-center gap-4 mb-auto">
          {AdminLinks.map((data, index) => (
            <NavLink
              key={index}
              to={data.link}
              className="p-4 border-l-4 border-blue-400 hover:bg-primary/10 text-base mt-10 w-[220px] flex items-center justify-center rounded-sm"
            >
              {data.title}
            </NavLink>
          ))}
        </div>
        {/* <div className="flex flex-col justify-center items-center mt-auto mb-4">
          <Button
            onClick={handleClick}
            className="border-l-4 border-red-600 p-5 bg-red-500/5 hover:bg-red-500/10 font-bold text-sm w-[220px]"
          >
            <span className="flex flex-row items-center justify-center gap-2 text-red-500">
              <Power size={20} /> Logout
            </span>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default InstructorNavbar;
