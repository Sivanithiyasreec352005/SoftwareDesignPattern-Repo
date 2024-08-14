import { Play } from 'lucide-react'; // Ensure this import is correct and lucide-react is installed
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLearning = () => {
  const navigate = useNavigate();
  
  // Define the courses with additional information
  const [courses] = useState([
    { 
      title: 'Course 1', 
      description: 'Programming in Java',
      learningMaterial: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.' 
    },
    { 
      title: 'Course 2',
      description: 'Introduction to Python',
      learningMaterial: 'Python is an interpreted, high-level, general-purpose programming language known for its readability and simplicity.' 
    },
    { 
      title: 'Course 3',
      description: 'Web Development with React', 
      learningMaterial: 'React is a JavaScript library for building user interfaces, especially single-page applications where data changes over time.' 
    },
  ]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const routeMcq = () => {
    navigate('/mcq/2341'); 
  };

  const showCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeDetails = () => {
    setSelectedCourse(null);
  };
  return (
    <div className='h-[90vh] flex flex-col items-center shadow-sm shadow-slate-100 w-[84vw]'>
      <section className="py-8 w-full">
        <h2 className="text-center text-2xl font-bold mb-8">Courses<br /></h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {courses.map((course, index) => (
            <div
              key={index} 
              className="card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              onClick={() => showCourseDetails(course)}>
              <div className="card-inner">
                <div className="box">
                  <a href="#" className="iconBox text-gray-700 hover:text-gray-900">
                  </a>
                </div>
              </div>
              <div className="content p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">
                  {course.description || 'No description available'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Course Details</h3>
            <p><strong>Title:</strong> {selectedCourse.title}</p>
            <p><strong>Description:</strong> {selectedCourse.description || 'No description available'}</p>
            <p><strong>Learning Material:</strong> {selectedCourse.learningMaterial || 'No learning material available'}</p>
            <button 
              onClick={closeDetails} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-4">
              Close
            </button>
          </div>
        </div>
      )}

      <div className='flex justify-center items-center mt-8'>
        <button onClick={routeMcq}>
          <Play className='text-green-500 p-1 rounded-md border-2 border-green-500 hover:bg-green-500 hover:text-white' size={30} />
        </button>
      </div>
    </div>
  );
};

export default UserLearning;
