import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserReports = () => {
  // Sample user data
  const userReports = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      courses: "Course 1, Course 2",
      registrationDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      courses: "Course 3",
      registrationDate: "2024-02-20",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      courses: "Course 4, Course 5",
      registrationDate: "2024-03-10",
    },
  ];

  return (
    <div className='m-4 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader>
          <CardTitle>User Report</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Registration Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userReports.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.courses}</TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserReports;
