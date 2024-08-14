import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function CourseEnroll() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Programming",
      seats: 50,
      seatsAvailable: 20,
      startDate: "2024-02-01",
      endDate: "2024-07-29",
    },
    {
      id: 2,
      name: "Design",
      seats: 30,
      seatsAvailable: 10,
      startDate: "2024-03-03",
      endDate: "2024-08-15",
    },
    {
      id: 3,
      name: "Web Development",
      seats: 40,
      seatsAvailable: 30,
      startDate: "2024-06-11",
      endDate: "2024-12-01",
    },
    {
      id: 4,
      name: "Machine Learning",
      seats: 35,
      seatsAvailable: 15,
      startDate: "2024-07-02",
      endDate: "2024-11-08",
    },
    {
      id: 5,
      name: "Artificial Intelligence",
      seats: 45,
      seatsAvailable: 25,
      startDate: "2024-09-01",
      endDate: "2024-12-15",
    },
    {
      id: 6,
      name: "Flutter",
      seats: 45,
      seatsAvailable: 25,
      startDate: "2024-09-01",
      endDate: "2025-01-01",
    },
  ]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const navigate = useNavigate();

  const handleCourseSelect = (course) => {
    if (selectedCourses.some((c) => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString("en-US", { month: "short" })} ${date.getDate()}`;
  };

  const handleEnroll = () => {
    navigate('/enroll');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Enroll in Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Seats Available</p>
                  <p className="text-lg font-bold">
                    {course.seatsAvailable}/{course.seats}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dates</p>
                  <p className="text-lg font-bold">
                    {formatDate(course.startDate)} - {formatDate(course.endDate)}
                  </p>
                </div>
              </div>
              <Button
                variant={selectedCourses.some((c) => c.id === course.id) ? "primary" : "outline"}
                onClick={() => handleCourseSelect(course)}
                className="w-full"
              >
                {selectedCourses.some((c) => c.id === course.id) ? "Deselect" : "Select"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Selected Courses</h2>
        {selectedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCourses.map((course) => (
              <Card key={course.id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Seats Available</p>
                      <p className="text-lg font-bold">
                        {course.seatsAvailable}/{course.seats}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dates</p>
                      <p className="text-lg font-bold">
                        {formatDate(course.startDate)} - {formatDate(course.endDate)}
                      </p>
                    </div>
                  </div>
                  <Button onClick={() => handleCourseSelect(course)} className="w-full">
                    Deselect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No courses selected yet.</p>
        )}
      </div>
      <div className="mt-8 flex justify-end">
        <Button size="lg" onClick={handleEnroll}>
          Enroll
        </Button>
      </div>
    </div>
  );
}

export default CourseEnroll;