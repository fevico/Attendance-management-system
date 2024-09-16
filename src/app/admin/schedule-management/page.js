"use client"
import AdminContainer from '@/component/admin/AdminContainer'
import Button from '@/component/reusable/Button';
import React from 'react'
import { LuArrowRightToLine } from 'react-icons/lu';

const page = () => {
  return (
    <AdminContainer>
      <div className="p-8 bg-gray-100 min-h-screen">
        {/* Class Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Advanced Chemistry (ACH401)
          </h2>
          <Button
            icon={<LuArrowRightToLine />}
            onClick={() => {
              // router.push('/auth/signin');
            }}
            style="border border-[#090B0E] font-[700] gap-1 mb-2 px-7 py-1 text-xl text-[#fff] bg-[#65A9B2] hover:text-[#65A9B2] hover:bg-white transition rounded"
            text="Modify"
          />
        </div>

        {/* Class Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-md p-4">
            <p className="font-bold">Class Days:</p>
            <p>Mondays, Wednesdays & Thursdays</p>
          </div>
          <div className="border rounded-md p-4">
            <p className="font-bold">Class Time:</p>
            <p>10:00 AM - 12:00 PM</p>
          </div>
          <div className="border rounded-md p-4">
            <p className="font-bold">Next Class:</p>
            <p>September 5, 2024, at 10:00 AM</p>
          </div>
        </div>

        {/* Class Schedule */}
        <div className="border rounded-md p-4">
          <table className="min-w-full text-center">
            <thead>
              <tr className="border-b">
                <th className="py-2">Monday</th>
                <th className="py-2">Tuesday</th>
                <th className="py-2">Wednesday</th>
                <th className="py-2">Thursday</th>
                <th className="py-2">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">
                  <span className="inline-block w-6 h-6 bg-green-500 rounded-full"></span>
                </td>
                <td className="py-2">
                  <span className="inline-block w-6 h-6"></span>
                </td>
                <td className="py-2">
                  <span className="inline-block w-6 h-6 bg-green-500 rounded-full"></span>
                </td>
                <td className="py-2">
                  <span className="inline-block w-6 h-6 bg-green-500 rounded-full"></span>
                </td>
                <td className="py-2">
                  <span className="inline-block w-6 h-6"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminContainer>
  )
}

export default page
