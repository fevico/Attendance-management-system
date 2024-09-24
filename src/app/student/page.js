"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { BsQrCodeScan } from "react-icons/bs";

const CoursePage = () => {
  const apiUrl = "https://attendance-management-server-g57k.onrender.com/course/student/courses";
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setCourses(response.data);
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
        <ul className="min-w-full bg-white border border-gray-300">
          {courses.map((course) => (
            <li key={course._id} className="w-[98%] p-2 flex justify-between items-center my-2 shadow rounded mx-auto">
              <div>
                <h1 className="text-xl mb-1">{course.name} ({course.code}) - ({course.credits})</h1>
                <p>{course.startTime} - {course.endTime}</p>
              </div>

              <Link href={`/student/qrScanner?courseId=${course._id}`}>
                <BsQrCodeScan size={35} color="#65A9B2" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoursePage;