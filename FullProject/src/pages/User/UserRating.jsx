import React, { useState } from 'react';

const UserRating = ({ courseId }) => {
  const [courseRating, setCourseRating] = useState(0);
  const [instructorComment, setInstructorComment] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (courseRating === 0) {
      setError('Please provide a rating for the course.');
      return;
    }

    try {
      setError(null);
      await submitFeedback({ courseId, courseRating, instructorComment });
      setCourseRating(0);
      setInstructorComment('');
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 border border-gray-300 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseRating">
          Course Rating:
        </label>
        <select
          id="courseRating"
          value={courseRating}
          onChange={(e) => setCourseRating(Number(e.target.value))}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="0">Select</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorComment">
          Instructor Comment (Optional):
        </label>
        <textarea
          id="instructorComment"
          value={instructorComment}
          onChange={(e) => setInstructorComment(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

const submitFeedback = async (feedback) => {
  console.log('Submitting feedback:', feedback);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default UserRating;
