import AdminContainer from '@/component/admin/AdminContainer'
import React from 'react'

const page = () => {
  const attendanceData = [
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "N/A",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Absent",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
    {
      name: "Jane Smith",
      id: "789012",
      course: "Advanced Chemistry",
      status: "Present",
      time: "10:02 AM",
    },
  ];
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
                <th className="py-2 px-4 border-b border-gray-200">Student Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Student ID</th>
                <th className="py-2 px-4 border-b border-gray-200">Course Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Attendance Status</th>
                <th className="py-2 px-4 border-b border-gray-200">Check-in Time</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100 mt-5">
                  <td className="py-2 px-4 border-b border-gray-200">{student.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{student.id}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{student.course}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{student.status}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{student.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminContainer>
  )
}

export default page
