import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, BarChart2, Settings, UserPlus, BookOpen, TrendingUp } from 'lucide-react';

const UserDashboard = () => {
    const navigate = useNavigate();
    const [courseProgress, setCourseProgress] = useState(70); // Example progress value

    const handleAddUser = () => {
        navigate('/user/users');
    };
    const handleEnrolledCourses = () => {
        navigate('/courseEnroll');  // Navigate to /courseEnroll
    };
    const handleProgressChange = (event) => {
        setCourseProgress(event.target.value);
    };

    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-2 mb-4">
                <h1 className="text-3xl font-bold text-primary mb-2">Welcome back user..!!</h1>
                <p className="text-lg text-muted-foreground">Manage your account and explore the features.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Card className='border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">View Test Reports</CardTitle>
                        <BarChart2 className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <button className="px-4 py-2 bg-primary text-white rounded w-full">View</button>
                    </CardContent>
                </Card>
                
               
                <Card className='border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Add Courses</CardTitle>
                        <UserPlus className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <button
                            className="px-4 py-2 bg-primary text-white rounded w-full"
                            onClick={handleAddUser}
                        >
                            Add
                        </button>
                    </CardContent>
                </Card>
                <Card className='border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Courses</CardTitle>
                        <ShoppingBag className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <button className="px-4 py-2 bg-primary text-white rounded w-full">View Courses</button>
                    </CardContent>
                </Card>
                <Card className='border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Course Enrolled</CardTitle>
                        <BookOpen className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <button className="px-4 py-2 bg-primary text-white rounded w-full">Enrolled</button>
                    </CardContent>
                </Card>
                <Card className='border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Enrolled Course Progress</CardTitle>
                        <TrendingUp className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-primary h-4 rounded-full" style={{ width: `${courseProgress}%` }}></div>
                        </div>
                        <p className="text-center mt-2">{courseProgress}% Complete</p>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={courseProgress}
                            onChange={handleProgressChange}
                            className="w-full mt-2"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserDashboard;
