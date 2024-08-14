import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import Axios
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Plus, TrashIcon } from "lucide-react";
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
} from "@/components/ui/sheet";

const AdminUsers = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    courseName: '',  // Renamed field
    instructorName: '',  // Renamed field
    courseTimePeriod: '',  // Renamed field
    password: '',
    courseRegistered: '', // added field
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
      setFormData({ courseName: '', instructorName: '', courseTimePeriod: '', password: '', courseRegistered: '' }); // reset form data
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

  const handleDelete = async (userId) => {
    try {
      // Send DELETE request to backend
      await axios.delete(`http://localhost:8080/courses/${userId}`);
      
      // Update the users state after successful deletion
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Failed to delete the user:', error);
      // Optionally, set an error message to show the user
      setError('Failed to delete the user. Please try again.');
    }
  };

  const confirmDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      handleDelete(userId);
    }
  };
  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          
          <Button onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-10 w-10 mr-2' /> Add User
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name of Course</TableHead> {/* Updated column header */}
                <TableHead>Instructor Name</TableHead> {/* Updated column header */}
                <TableHead>Course Time Period</TableHead> {/* Updated column header */}
                <TableHead>Course Registered</TableHead> {/* added column */}
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.courseName}</TableCell> {/* Updated field */}
                  <TableCell>{user.instructorName}</TableCell> {/* Updated field */}
                  <TableCell>{user.courseTimePeriod}</TableCell> {/* Updated field */}
                  <TableCell>{user.courseRegistered}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md'
                        onClick={() => handleEdit(user)} />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => confirmDelete(user.id)} />
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
        </SheetHeader>
        <SheetContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="courseName">Name of Course</Label> {/* Updated field */}
                <Input id="courseName" value={formData.courseName} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="instructorName">Instructor Name</Label> {/* Updated field */}
                <Input id="instructorName" value={formData.instructorName} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="courseTimePeriod">Course Time Period</Label> {/* Updated field */}
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

export default AdminUsers;
