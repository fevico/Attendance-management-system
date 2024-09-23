"use client"
import React, { useState } from 'react'
import Container from '@/component/auth/Container'
import DefaultInput from '@/component/reusable/Input'
import Button from '@/component/reusable/Button'
import { LuArrowRightToLine } from 'react-icons/lu'
import { useRouter } from "next/navigation";
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify'

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [role, setRole] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        "https://attendance-management-server-g57k.onrender.com/auth/login",
        data
      );
      setIsLoading(false);

      toast.success("Login successful!");
      router.push(response?.data?.role === 'lecturer' ? "/admin/attendance-tracking" : '/student');
      console.log(response?.data?.token);

      localStorage.setItem('authToken', response?.data?.token)
    } catch (err) {
      toast.error(err.response?.data || "Login failed");
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <Container headMessage={'Welcome Back!'} subMessage={'Let’s get you back into your account'}>

      <form onSubmit={handleSubmit}>
        <DefaultInput label={'Email Address'} placeholder={'example@gmail.com'} style={'my-4'} name='email' />
        <DefaultInput label={'Password'} placeholder={'Type in your password...'} style={''} name='password' type='password' />

        <Button icon={<LuArrowRightToLine />} isLoading={isLoading} style={'w-full border border-[#546881] bg-[#65A9B2] font-[600] mt-[40px] gap-1 px-6 py-1 text-xl text-white hover:text-[#65A9B2] hover:bg-white transition rounded'} text={'Log In'} />
      </form>

      <div className='w-full flex items-center justify-end my-1'>
        <p>
          Forgot password?{" "}
          <span>
            <Link href='/auth/reset' className='text-[#D20202]'>Reset</Link>
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center space-x-7 my-3 w-[90%] mx-auto">
        <div className="flex-grow border-t border-gray-300" />
        <span className="text-md text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      <Button icon={<LuArrowRightToLine />} onClick={() => router.push('/auth/signup')} style={'w-full border border-[#090B0E] font-[700] gap-1 mb-2 px-7 py-1 text-xl text-[#65A9B2] hover:text-white hover:bg-[#65A9B2] transition rounded'} text={'Sign Up'} />
    </Container>
  )
}

export default Page