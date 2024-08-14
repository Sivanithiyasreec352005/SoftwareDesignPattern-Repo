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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from 'axios';
import { Book, Edit, Plus, TrashIcon } from "lucide-react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://localhost:8080/courses';

const AdminCourses = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    difficultyLevel: '',
    schedule: '',
    syllabus: '',
    prerequisites: '',
  });
  const [courses, setCourses] = useState([]);
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(baseURL);
        setCourses(response.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError("There was a problem fetching courses. Please try again.");
      }
    };
    fetchCourses();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.difficultyLevel || !formData.schedule || !formData.syllabus || !formData.prerequisites) {
      setError("Please fill in all the details");
    } else {
      try {
        if (editMode) {
          await axios.put(`http://localhost:8080/courses/${currentCourseId}`, formData);
          setCourses((prevCourses) =>
            prevCourses.map((course) =>
              course.id === currentCourseId ? { ...course, ...formData } : course
            )
          );
        } else {
          const response = await axios.post('http://localhost:8080/courses/add', formData);
          const newCourse = { id: response.data.id, ...formData };
          setCourses((prevCourses) => [...prevCourses, newCourse]);
        }

        setOpen(false);
        setEditMode(false);
        setFormData({ title: '', category: '', difficultyLevel: '', schedule: '', syllabus: '', prerequisites: '' });
        setError(null);
      } catch (err) {
        console.error('Error saving course:', err);
        setError("There was a problem saving the course. Please try again.");
      }
    }
  };

  const handleEdit = (course) => {
    setFormData({
      title: course.title,
      category: course.category,
      difficultyLevel: course.difficultyLevel,
      schedule: course.schedule,
      syllabus: course.syllabus,
      prerequisites: course.prerequisites,
    });
    setCurrentCourseId(course.id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:8080/courses/${courseId}`);
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
    } catch (err) {
      console.error('Error deleting course:', err);
      setError("There was a problem deleting the course. Please try again.");
    }
  };

  return (
    <div className='m-1 p-4'>
      <div className='mb-4'>
        <Card className='w-1/4 border border-primary bg-gray-50'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Courses
            </CardTitle>
            <Book className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{courses.length}</div>
          </CardContent>
        </Card>
      </div>
      <Card className='shadow-sm shadow-primary bg-white'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg" 
            onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-5 w-5 mr-2' /> Add Course
          </Button>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table className="min-w-full text-sm bg-white">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="w-[150px] font-semibold text-gray-600">Title</TableHead>
                <TableHead className="font-semibold text-gray-600">Category</TableHead>
                <TableHead className="font-semibold text-gray-600">Difficulty Level</TableHead>
                <TableHead className="font-semibold text-gray-600">Schedule</TableHead>
                <TableHead className="font-semibold text-gray-600">Syllabus</TableHead>
                <TableHead className="font-semibold text-gray-600">Prerequisites</TableHead>
                <TableHead className="flex justify-center font-semibold text-gray-600">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800">{course.title}</TableCell>
                  <TableCell className="text-gray-700">{course.category}</TableCell>
                  <TableCell className="text-gray-700">{course.difficultyLevel}</TableCell>
                  <TableCell className="text-gray-700">{course.schedule}</TableCell>
                  <TableCell className="text-gray-700">{course.syllabus}</TableCell>
                  <TableCell className="text-gray-700">{course.prerequisites}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-100 hover:text-blue-600 rounded-md'
                        onClick={() => handleEdit(course)} />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-100 hover:text-red-600 rounded-md'
                        onClick={() => handleDelete(course.id)} />
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
          {/* <SheetTitle className="text-xl font-semibold text-gray-800">{editMode ? 'Edit Course' : 'Add Course'}</SheetTitle> */}
        </SheetHeader>
        <SheetContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="title" className="text-gray-600">Title</Label>
                <Input id="title" value={formData.title} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
              </div>
              <div>
                <Label htmlFor="category" className="text-gray-600">Category</Label>
                <Input id="category" value={formData.category} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
              </div>
              <div>
                <Label htmlFor="difficultyLevel" className="text-gray-600">Difficulty Level</Label>
                <Input id="difficultyLevel" value={formData.difficultyLevel} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
              </div>
              <div>
                <Label htmlFor="schedule" className="text-gray-600">Schedule</Label>
                <Input id="schedule" value={formData.schedule} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
              </div>
              <div>
                <Label htmlFor="syllabus" className="text-gray-600">Syllabus</Label>
                <Input id="syllabus" value={formData.syllabus} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
              </div>
              <div>
                <Label htmlFor="prerequisites" className="text-gray-600">Prerequisites</Label>
                <Input id="prerequisites" value={formData.prerequisites} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"/>
              </div>
            </div>
            {error && <div className="mt-4 text-red-500">{error}</div>}
            <div className="mt-6 flex justify-end">
              <Button type="button" onClick={() => setOpen(false)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg mr-2">Cancel</Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                {editMode ? 'Update Course' : 'Add Course'}
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminCourses;
