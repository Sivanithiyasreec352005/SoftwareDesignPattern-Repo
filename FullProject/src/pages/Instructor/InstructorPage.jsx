import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth';

const InstructorPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.SignOut();
        navigate('/');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-indigo-600 text-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-end items-center">
                    {/* Title and Links on the right */}
                    <div className="flex space-x-4 items-center">
                        <h1 className="text-2xl font-extrabold">Instructor Dashboard</h1>
                        <Link to="/instructor/courses" className="text-white hover:underline">
                            My Courses
                        </Link>
                        <Link to="/instructor/feedback" className="text-white hover:underline">
                            Feedback
                        </Link>
                        <Link to="/instructor/profile" className="text-white hover:underline">
                            Profile
                        </Link>
                        <button 
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                            onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-grow">
                {/* Sidebar */}
                <div className="w-64 bg-white p-6 shadow-lg">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">Navigation</h2>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/instructor/courses" className="text-indigo-600 hover:underline hover:text-indigo-800">
                                My Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/instructor/feedback" className="text-indigo-600 hover:underline hover:text-indigo-800">
                                Feedback
                            </Link>
                        </li>
                        <li>
                            <Link to="/instructor/profile" className="text-indigo-600 hover:underline hover:text-indigo-800">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>

               
            </div>
        </div>
    );
};

export default InstructorPage;
