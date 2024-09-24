"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const CoursePage = () => {
  const apiUrl = "https://attendance-management-server-g57k.onrender.com/course/student/courses";
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        setError("Authentication token missing. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        setCourses(response.data); // Assuming response.data holds an array of courses
        console.log(response.data.message);
      } catch (err) {
        const backendError = err.response?.data?.message;
        setError(backendError);
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Available Courses</h1>

      {courses.length === 0 ? (
        <p>{error}</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Course Name</th>
              <th className="py-2 px-4 border-b">Course Code</th>
              <th className="py-2 px-4 border-b">Credit</th>
              <th className="py-2 px-4 border-b">Schedule</th>
              <th className="py-2 px-4 border-b"></th> {/* QR Code Button */}
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td className="py-2 px-4 border-b">{course.name}</td>
                <td className="py-2 px-4 border-b">{course.code}</td>
                <td className="py-2 px-4 border-b">{course.credits}</td>
                <td className="py-2 px-4 border-b">
                  {course.startTime} - {course.endTime}
                </td>
                <td className="py-2 px-4 border-b">
                  {/* Link to QR Scanner page with the courseId */}
                  <Link href={`/qrScanner?courseId=${course._id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Scan QR Code
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoursePage;