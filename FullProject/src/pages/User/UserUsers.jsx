import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from 'react';
const UserUsers = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    course: '',
    chead: '',
    assignedby: '',
    cdept: '',
  });
  const [users, setUsers] = useState([
    {
      course:"Java",
      chead: "John Doe",
      assignedby:"Richard",
      cdept: "IT"
    },
    {
     course:"Flutter",
      chead: "Sam",
      assignedby:"Richard",
      cdept: "Cse"
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
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
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
          { id: users.length + 1, ...formData, courseRegistered: 'N/A' }, // Add a default course
        ]);
      }
      setOpen(false);
      setEditMode(false);
      setFormData({ name: '', username: '', email: '', password: '' }); // reset form data
      setError(null);
    }
  };
  const handleEdit = (user) => {
    setFormData({
      name: user.course,
      username: user.chead,
      email: user.assignedby,
      password: user.cdept,
    });
    setCurrentUserId(user.id);
    setEditMode(true);
    setOpen(true);
  };
  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Course</TableHead>
                <TableHead>Course Head</TableHead>
                <TableHead>Assigned By</TableHead>
                <TableHead>Department</TableHead> </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.course}</TableCell>
                  <TableCell>{user.chead}</TableCell>
                  <TableCell>{user.assignedby}</TableCell>
                  <TableCell>{user.cdept}</TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
export default UserUsers;
