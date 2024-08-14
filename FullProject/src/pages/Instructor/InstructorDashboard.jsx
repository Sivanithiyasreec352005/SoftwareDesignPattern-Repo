import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth';

const InstructorDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.SignOut();
        navigate('/');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">

            <nav className="bg-indigo-600 text-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold">Instructor Dashboard</h1>
                    <div className="flex space-x-4 items-center">
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
            <div className="flex flex-grow container mx-auto px-4 py-6">
                <aside className="w-64 bg-white p-6 shadow-lg">
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
                </aside>
                <main className="flex-grow bg-gray-100 p-8">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Overview Statistics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800">Total Courses</h3>
                                <p className="text-2xl font-bold text-gray-600">12</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800">Total Students</h3>
                                <p className="text-2xl font-bold text-gray-600">350</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800">Completed Courses</h3>
                                <p className="text-2xl font-bold text-gray-600">150</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800">Pending Feedback</h3>
                                <p className="text-2xl font-bold text-gray-600">8</p>
                            </div>
                        </div>
                    </section>

                    {/* Recent Activities */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Recent Activities</h2>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <p className="text-lg text-gray-600">Updated course material for "Introduction to React".</p>
                                <span className="text-sm text-gray-500">2 days ago</span>
                            </li>
                            <li>
                                <p className="text-lg text-gray-600">Graded assignments for "Advanced JavaScript".</p>
                                <span className="text-sm text-gray-500">5 days ago</span>
                            </li>
                            <li>
                                <p className="text-lg text-gray-600">Responded to student queries in "Data Structures".</p>
                                <span className="text-sm text-gray-500">1 week ago</span>
                            </li>
                        </ul>
                    </section>

                    {/* Upcoming Events */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Upcoming Events</h2>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <p className="text-lg text-gray-600">Course review meeting - August 15, 2024</p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-600">Workshop on teaching strategies - August 20, 2024</p>
                            </li>
                            <li>
                                <p className="text-lg text-gray-600">Student feedback collection deadline - August 25, 2024</p>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default InstructorDashboard;
