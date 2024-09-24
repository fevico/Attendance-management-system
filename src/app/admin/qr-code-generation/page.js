"use client";
import AdminContainer from '@/component/admin/AdminContainer';
import Button from '@/component/reusable/Button';
import DefaultInput from '@/component/reusable/Input';
import React, { useState } from 'react';
import { BsQrCodeScan } from "react-icons/bs";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { LuDownload } from 'react-icons/lu';
import { MdOutlineCancel } from 'react-icons/md';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const router = useRouter();

  const apiUrl = 'https://attendance-management-server-g57k.onrender.com/course/create';

  const handleSubmit = async (e) => {
    const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        console.error("Authentication token missing. Please log in.");
        // setLoading(false);
        return;
      }
    e.preventDefault(); // Prevent page reload
    setIsLoading(true);

    const formData = new FormData(e.currentTarget); // Current target refers to the form

    const data = {
      name: formData.get("CourseName"),
      code: formData.get("CourseCode"),
      credits: formData.get("CourseCredit"),
      startTime: formData.get("StartDateTime"),
      endTime: formData.get("EndDateTime"),
    };

    try {
      const response = await axios.post(apiUrl,
         data,
         {headers: { Authorization: `Bearer ${authToken}` },}
        );
      setIsLoading(false);

      toast.success("Course Created Successfully");
      setQrCodeUrl(response?.data?.qrCode);
      setIsModalOpen(true); // Open modal on successful QR code generation
    } catch (err) {
      toast.error(err.response?.data || "Course Creation Failed");
      console.error(err);
      setIsLoading(false);
    }
  };

  // Function to download the QR code
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminContainer>
      <div className="p-8 bg-gray-100 min-h-screen">
        {/* Class Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {/* Add your header title here */}
          </h2>
        </div>

        {/* Class Info Boxes */}
        <div className="grid w-full place-items-center">
          <form className='w-1/2' onSubmit={handleSubmit}>
            <DefaultInput label={'Course Name'} placeholder={'Calculus I'} style={'mb-4'} name='CourseName' type='' />
            <DefaultInput label={'Course Code'} placeholder={'MATH121'} style={'mb-4'} name='CourseCode' type='' />
            <DefaultInput label={'Number of Credit'} placeholder={'5'} style={'mb-4'} name='CourseCredit' type='number' />
            <DefaultInput label={'Start Time'} placeholder={''} style={'mb-4'} name='StartDateTime' type='time' />
            <DefaultInput label={'End Time'} placeholder={''} style={''} name='EndDateTime' type='time' />

            <Button
              icon={<BsQrCodeScan />}
              isLoading={isLoading}
              style="w-full border border-[#546881] bg-[#65A9B2] font-[600] mt-[40px] gap-1 px-6 py-1 text-xl text-white hover:text-[#65A9B2] hover:bg-white transition rounded"
              text="Generate QR Code"
            />
          </form>
        </div>
      </div>

      {/* Modal for QR code */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center relative">
            <h2 className="text-2xl font-bold mb-4">Your QR Code</h2>
            <img src={qrCodeUrl} alt="QR Code" className="mb-4" />

            {/* Download button */}
            <Button
              icon={<LuDownload />}
              onClick={handleDownload}
              style="w-full border border-[#546881] bg-[#65A9B2] font-[600] mt-[40px] gap-1 px-6 py-1 text-xl text-white hover:text-[#65A9B2] hover:bg-white transition rounded"
              text="Download QR Code"
            />

            {/* Close modal button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <MdOutlineCancel size={25} />
            </button>
          </div>
        </div>
      )}
    </AdminContainer>
  );
};

export default Page;