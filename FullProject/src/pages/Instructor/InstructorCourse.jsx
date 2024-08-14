import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, TrashIcon, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import InstructorDashboard from './InstructorDashboard';

const InstructorCourse = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    courseTimePeriod: '',
    password: '',
    courseRegistered: '',
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      courseName: "Course 1",
      instructorName: "John Doe",
      courseTimePeriod: "2024-2025",
      password: "",
      courseRegistered: "Course 1",
    },
    {
      id: 2,
      courseName: "Course 2",
      instructorName: "Jane Smith",
      courseTimePeriod: "2024-2025",
      password: "",
      courseRegistered: "Course 2",
    },
  ]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.courseName || !formData.instructorName || !formData.courseTimePeriod || !formData.password || !formData.courseRegistered) {
      setError("Please fill in all the details");
    } else {
      if (editMode) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === currentUserId ? { ...user, ...formData } : user
          )
        );
      } else {
        setUsers((prevUsers) => [
          ...prevUsers,
          { id: users.length + 1, ...formData },
        ]);
      }
      setOpen(false);
      setEditMode(false);
      setFormData({ courseName: '', instructorName: '', courseTimePeriod: '', password: '', courseRegistered: '' });
      setError(null);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      courseName: user.courseName,
      instructorName: user.instructorName,
      courseTimePeriod: user.courseTimePeriod,
      password: user.password,
      courseRegistered: user.courseRegistered,
    });
    setCurrentUserId(user.id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleViewReport = () => {
    navigate('/viewreport');
  };

  return (
    <div className='m-1 p-4'>
      <div className='mb-4'>
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Courses
            </CardTitle>
            <Book className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
          </CardContent>
        </Card>
      </div>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <Button onClick={handleViewReport}>
            View Report
          </Button>
          <Button onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-10 w-10 mr-2' /> Add Course
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name of Course</TableHead>
                <TableHead>Instructor Name</TableHead>
                <TableHead>Course Time Period</TableHead>
                <TableHead>Course Registered</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.courseName}</TableCell>
                  <TableCell>{user.instructorName}</TableCell>
                  <TableCell>{user.courseTimePeriod}</TableCell>
                  <TableCell>{user.courseRegistered}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md'
                        onClick={() => handleEdit(user)} />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDelete(user.id)} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Sheet open={open} onClose={() => setOpen(false)}>
        <SheetHeader>
          {/* <SheetTitle>{editMode ? 'Edit Course' : 'Add Course'}</SheetTitle> */}
        </SheetHeader>
        <SheetContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="courseName">Name of Course</Label>
                <Input id="courseName" value={formData.courseName} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="instructorName">Instructor Name</Label>
                <Input id="instructorName" value={formData.instructorName} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="courseTimePeriod">Course Time Period</Label>
                <Input id="courseTimePeriod" value={formData.courseTimePeriod} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={formData.password} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="courseRegistered">Course Registered</Label>
                <Input id="courseRegistered" value={formData.courseRegistered} onChange={handleInputChange} />
              </div>
            </div>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <Button type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">{editMode ? 'Update' : 'Add'}</Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default InstructorCourse