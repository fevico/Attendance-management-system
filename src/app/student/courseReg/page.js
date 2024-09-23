"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
    const apiUrl = 'https://attendance-management-server-g57k.onrender.com/course/student/course/registration';
    const fetchCoursesUrl = 'https://attendance-management-server-g57k.onrender.com/course/courses';

    // State to keep track of selected courses, available courses, and auth token
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [courses, setCourses] = useState([]); // Holds courses fetched from the API
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // State for error handling
    const router = useRouter()

    // Use effect to get the auth token and fetch courses (runs only on the client)
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        setToken(authToken);
        console.log('Token:', authToken);
    }, []);

    // Fetch courses after the token is set
    useEffect(() => {
        const fetchCourses = async () => {
            if (!token) return; // Exit if token is not available

            try {
                const response = await axios.get(fetchCoursesUrl, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCourses(response.data.course); // Adjusted to access the 'course' property
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError('Failed to fetch courses. Please try again later.'); // Set error message
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchCourses();
    }, [token]); // This effect runs only when the token is available

    // Handle course selection (when checkbox is checked/unchecked)
    const handleCourseSelection = (event) => {
        const courseId = event.target.id;
        if (event.target.checked) {
            setSelectedCourses((prevSelected) => [...prevSelected, courseId]);
        } else {
            setSelectedCourses((prevSelected) => prevSelected.filter((id) => id !== courseId));
        }
    };

    // Send selected courses to the API
    const handleSubmit = async () => {
        if (selectedCourses.length === 0) {
            alert("Please select at least one course.");
            return;
        }

        console.log("Submitting the following course IDs:", selectedCourses);

        try {
            const response = await axios.post(
                apiUrl,
                { courseId: selectedCourses }, // Change to courseIds if that's the expected key
                { headers: { Authorization: `Bearer ${token}` } }
            );
            // console.log('Courses registered:', response.data);
            alert("Courses registered successfully!");
            router.push('/auth/signin')
        } catch (err) {
            console.error('Failed to register courses:', err);
            if (err.response) {
                console.error('Response data:', err.response.data);
                alert(err.response.data.message || "Failed to register courses. Please try again."); // Display specific error message
            } else {
                alert("Failed to register courses. Please try again."); // Alert on general failure
            }
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Select Your Courses</h1>

            {loading ? (
                <p>Loading courses...</p>
            ) : error ? ( // Check for errors
                <p className="text-red-500">{error}</p>
            ) : courses.length > 0 ? (
                courses.map((course, index) => (
                    <div key={index} className="w-full flex items-center my-1">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={course._id}
                                checked={selectedCourses.includes(course._id)}
                                onChange={handleCourseSelection}
                                className="mr-2"
                            />
                            <span>{course.name} ({course.code})</span>
                        </div>
                    </div>
                ))
            ) : (
                <p>No courses available</p>
            )}

            <button
                onClick={handleSubmit}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Register Selected Courses
            </button>
        </div>
    );
};

export default Page;