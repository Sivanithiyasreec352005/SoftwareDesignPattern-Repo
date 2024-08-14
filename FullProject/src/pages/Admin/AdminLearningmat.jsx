import React, { useState, useEffect } from 'react';

const LearningMaterialPage = () => {
    const [materials, setMaterials] = useState([]);
    const [newMaterial, setNewMaterial] = useState({
        title: '',
        type: '',
        url: '',
        courseId: ''
    });
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        // Fetch existing materials on component mount
        fetch('http://localhost:8080/learning')
            .then(response => response.json())
            .then(data => setMaterials(data))
            .catch(error => console.error('Error fetching materials:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMaterial(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMaterial.title && newMaterial.type && newMaterial.url && newMaterial.courseId) {
            fetch(`http://localhost:8080/learning/${newMaterial.courseId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMaterial),
            })
            .then(response => response.json())
            .then(data => {
                setMaterials([...materials, data]);
                setNewMaterial({ title: '', type: '', url: '', courseId: '' });
                setIsAdding(false);
            })
            .catch(error => console.error('Error adding material:', error));
        }
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/learning/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setMaterials(materials.filter(material => material.id !== id));
        })
        .catch(error => console.error('Error deleting material:', error));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Learning Materials</h1>
            
            {/* Toggle Add Material Form */}
            <button
                onClick={() => setIsAdding(!isAdding)}
                className={`mb-6 px-4 py-2 rounded shadow-md transition-colors duration-300 ${
                    isAdding ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
                {isAdding ? 'Cancel' : 'Add New Material'}
            </button>

            {/* Conditional Form Display */}
            {isAdding && (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Material</h2>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newMaterial.title}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-medium mb-2">Type</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={newMaterial.type}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="url" className="block text-gray-700 font-medium mb-2">URL</label>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={newMaterial.url}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="courseId" className="block text-gray-700 font-medium mb-2">Course ID</label>
                        <input
                            type="number"
                            id="courseId"
                            name="courseId"
                            value={newMaterial.courseId}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                    >
                        Add Material
                    </button>
                </form>
            )}
            
            {/* Display Materials */}
            <div>
                <ul className="list-disc list-inside space-y-6">
                    {materials.map(material => (
                        <li key={material.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{material.title}</h2>
                            <p className="text-gray-600 mb-1">Type: <span className="font-semibold">{material.type}</span></p>
                            <p className="text-gray-600 mb-1">Course ID: <span className="font-semibold">{material.courseId}</span></p>
                            <a 
                                href={material.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 hover:underline"
                            >
                                View Material
                            </a>
                            <button
                                onClick={() => handleDelete(material.id)}
                                className="mt-2 bg-red-500 text-white px-2 py-1 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LearningMaterialPage;
