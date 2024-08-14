import React, { useState } from 'react';
const InstructorAssignment = () => {
    const [assignments, setAssignments] = useState([
        // Initial example assignments
        { id: 1, title: 'Assignment 1', description: 'First assignment', due_date: '2024-08-20', course_id: 101 },
        { id: 2, title: 'Assignment 2', description: 'Second assignment', due_date: '2024-09-15', course_id: 102 }
    ]);

    const [assignment, setAssignment] = useState({
        id: '',
        title: '',
        description: '',
        due_date: '',
        course_id: ''
    });

    const [isAdding, setIsAdding] = useState(false); // State to toggle form visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignment(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (assignment.id && assignment.title && assignment.description && assignment.due_date && assignment.course_id) {
            setAssignments([...assignments, { ...assignment, id: parseInt(assignment.id) }]);
            setAssignment({ id: '', title: '', description: '', due_date: '', course_id: '' });
            setIsAdding(false); // Hide form after submission
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Assignments</h1>

            {/* Toggle Add Assignment Form */}
            <button
                onClick={() => setIsAdding(!isAdding)}
                className={`mb-6 px-4 py-2 rounded shadow-md transition-colors duration-300 ${
                    isAdding ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
                {isAdding ? 'Cancel' : 'Add New Assignment'}
            </button>

            {/* Conditional Form Display */}
            {isAdding && (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Assignment Details</h2>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">ID</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={assignment.id}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={assignment.title}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={assignment.description}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="due_date" className="block text-gray-700 font-medium mb-2">Due Date</label>
                        <input
                            type="date"
                            id="due_date"
                            name="due_date"
                            value={assignment.due_date}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course_id" className="block text-gray-700 font-medium mb-2">Course ID</label>
                        <input
                            type="number"
                            id="course_id"
                            name="course_id"
                            value={assignment.course_id}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                    >
                        Add Assignment
                    </button>
                </form>
            )}

            {/* Display Assignments */}
            <div>
                <ul className="list-disc list-inside space-y-6">
                    {assignments.map(assign => (
                        <li key={assign.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{assign.title}</h2>
                            <p className="text-gray-600 mb-1">Description: <span className="font-semibold">{assign.description}</span></p>
                            <p className="text-gray-600 mb-1">Due Date: <span className="font-semibold">{assign.due_date}</span></p>
                            <p className="text-gray-600 mb-1">Course ID: <span className="font-semibold">{assign.course_id}</span></p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InstructorAssignment;
