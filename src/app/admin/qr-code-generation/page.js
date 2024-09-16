"use client"
import AdminContainer from '@/component/admin/AdminContainer'
import Button from '@/component/reusable/Button';
import React from 'react'
import { BsQrCodeScan } from "react-icons/bs";

const page = () => {
  return (
    <AdminContainer>
      <div className="p-8 bg-gray-100 min-h-screen">
        {/* Class Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Today is 5th September, 2024
          </h2>
          <Button
            icon={<BsQrCodeScan />}
            onClick={() => {
              // router.push('/auth/signin');
            }}
            style="border border-[#090B0E] font-[700] gap-1 mb-2 px-7 py-1 text-xl text-[#fff] bg-[#65A9B2] hover:text-[#65A9B2] hover:bg-white transition rounded"
            text="Generate QR Code"
          />
        </div>

        {/* Class Info Boxes */}
        <div className="grid w-full place-items-center">

        </div>
      </div>
    </AdminContainer>
  )
}

export default page
