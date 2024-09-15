"use client";
import React from 'react';
import Container from '@/component/auth/Container';
import DefaultInput from '@/component/reusable/Input';
import Button from '@/component/reusable/Button';
import { LuArrowRightToLine } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const router = useRouter()

  return (
    <Container
      headMessage="New to Stubborn Academy?"
      subMessage="No worries! Let's get you started"
    >
      <DefaultInput
        label="Full Name"
        placeholder="Josephine Peters"
        style="my-4"
      />
      <DefaultInput
        label="Email Address"
        placeholder="example@gmail.com"
        style="mb-4"
      />
      <DefaultInput
        label="Password"
        placeholder="Type in your password..."
        style=""
      />

      <div className="w-full flex items-center my-1">
        <div className="flex items-center justify-center">
          <DefaultInput
            label=""
            placeholder=""
            style="mb-[-7px] mr-1"
            type="checkbox"
          />
          <span>Student</span>
        </div>

        <div className="flex items-center justify-center ml-3">
          <DefaultInput
            label=""
            placeholder=""
            style="mb-[-7px] mr-1"
            type="checkbox"
          />
          <span>Lecturer</span>
        </div>
      </div>

      {/* Sign up Button */}
      <Button
        icon={<LuArrowRightToLine />}
        onClick={() => {
          router.push('/auth/signup');
        }}
        style="w-full border border-[#546881] bg-[#65A9B2] font-[600] mt-[40px] gap-1 px-6 py-1 text-xl text-white hover:text-[#65A9B2] hover:bg-white transition rounded"
        text="Sign Up"
      />

      {/* Divider */}
      <div className="flex items-center justify-center space-x-7 my-3 w-[90%] mx-auto">
        <div className="flex-grow border-t border-gray-300" />
        <span className="text-md text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Log In Button */}
      <Button
        icon={<LuArrowRightToLine />}
        onClick={() => {
          router.push('/auth/signin');
        }}
        style="w-full border border-[#090B0E] font-[700] gap-1 mb-2 px-7 py-1 text-xl text-[#65A9B2] hover:text-white hover:bg-[#65A9B2] transition rounded"
        text="Log In"
      />
    </Container>
  );
};

export default Page;
