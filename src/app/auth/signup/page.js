"use client";
import React, { useState } from 'react';
import Container from '@/component/auth/Container';
import DefaultInput from '@/component/reusable/Input';
import Button from '@/component/reusable/Button';
import { LuArrowRightToLine } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState(''); // Track selected role

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: role, // Add the selected role to the data object
    };

    try {
      const response = await axios.post(
        "https://attendance-management-server-g57k.onrender.com/auth/create",
        data
      );
      setIsLoading(false);

      toast.success("Registration successful!");
      router.push("/auth/signin");
      console.log(response.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <Container
      headMessage="New to Stubborn Academy?"
      subMessage="No worries! Let's get you started"
    >
      <form onSubmit={handleSubmit}>
        <DefaultInput
          label="Full Name"
          placeholder="Josephine Peters"
          style="my-4"
          name="name"
        />
        <DefaultInput
          label="Email Address"
          placeholder="example@gmail.com"
          style="mb-4"
          name="email"
        />
        <DefaultInput
          label="Password"
          placeholder="Type in your password..."
          type="password"
          style=""
          name="password"
        />

        {/* Role selection with mutual exclusivity */}
        <div className="w-full flex items-center my-1">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={() => setRole('student')}
              className="mr-1"
            />
            <span>Student</span>
          </div>

          <div className="flex items-center justify-center ml-3">
            <input
              type="checkbox"
              name="role"
              value="lecturer"
              checked={role === 'lecturer'}
              onChange={() => setRole('lecturer')}
              className="mr-1"
            />
            <span>Lecturer</span>
          </div>
        </div>

        {/* Sign up Button */}
        <Button
          icon={<LuArrowRightToLine />}
          style="w-full border border-[#546881] bg-[#65A9B2] font-[600] mt-[40px] gap-1 px-6 py-1 text-xl text-white hover:text-[#65A9B2] hover:bg-white transition rounded"
          text="Sign Up"
        />
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center space-x-7 my-3 w-[90%] mx-auto">
        <div className="flex-grow border-t border-gray-300" />
        <span className="text-md text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Log In Button */}
      <Button
        icon={<LuArrowRightToLine />}
        onClick={() => router.push("/auth/signin")}
        style="w-full border border-[#090B0E] font-[700] gap-1 mb-2 px-7 py-1 text-xl text-[#65A9B2] hover:text-white hover:bg-[#65A9B2] transition rounded"
        text="Log In"
      />
    </Container>
  );
};

export default Page;