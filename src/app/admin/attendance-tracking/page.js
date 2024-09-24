"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminContainer from '@/component/admin/AdminContainer'

const page = () => {
  const apiUrl = "https://attendance-management-server-g57k.onrender.com/attendance/lecturer";
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState(null);
  // const attendanceData = [
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "N/A",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Absent",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "789012",
  //     course: "Advanced Chemistry",
  //     status: "Present",
  //     time: "10:02 AM",
  //   },
  // ];
  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      const authToken = localStorage.getItem('authToken');

      try {
        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        setAttendance(response.data); // Assuming response.data holds an array of courses
      } catch (err) {
        // Handle the error and store a user-friendly message in the error state
        if (err.response && err.response.data && err.response.data.message) {
          // Server responded with a specific error message
          setError(err.response.data.message);
        } else if (err.request) {
          // Request was made but no response was received
          setError("No response from the server. Please try again later.");
        } else {
          // Something happened in setting up the request
          setError("An unexpected error occurred.");
        }
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);
  return (
    <AdminContainer>
      <div className="p-2 min-h-screen">
        {/* Title */}

        {/* Date Picker */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Attendance Tracking</h1>
          <input
            type="text"
            placeholder="DD / MM / YY"
            className="border p-2 rounded text-center h-[35px] w-36"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className='mb-4'>
              <tr className="bg-gray-200 text-left mb-3">
                <th className="py-2 px-4 border-b border-gray-200">Student ID</th>
                <th className="py-2 px-4 border-b border-gray-200">Student Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Course Code</th>
                <th className="py-2 px-4 border-b border-gray-200">Attendance Status</th>
                {/* <th className="py-2 px-4 border-b border-gray-200">Check-in Time</th> */}
              </tr>
            </thead>
            {attendance > 0 ?
              <tbody>
                {attendance.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-100 mt-5">
                    <td className="py-2 px-4 border-b border-gray-200">{student._id}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{student.studentName}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{student.RegNumber}</td>
                    <td className="py-2 px-4 border-b border-gray-200"></td>
                    {/* <td className="py-2 px-4 border-b border-gray-200">{student.time}</td> */}
                  </tr>
                ))}
              </tbody>
              :
              <tbody>
                <div className="grid place-items-center w-full">
                  No Data found
                </div>
              </tbody>
            }

          </table>
        </div>
      </div>
    </AdminContainer>
  )
}

export default page
