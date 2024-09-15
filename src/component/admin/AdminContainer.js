"use client"
import React from 'react'
import Logo from '../reusable/Logo'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MdCoPresent } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import { BsQrCodeScan } from "react-icons/bs";

const AdminContainer = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname()

    const sidebar = [
        { text: 'Attendance Tracking', href: '/admin/attendance-tracking', icon: <MdCoPresent size={20} /> },
        { text: 'Schedule Management', href: '/admin/schedule-management', icon: <LuCalendarCheck size={20} /> },
        { text: 'QR Code Scanner', href: '/admin/qr-code-generation', icon: <BsQrCodeScan size={20} /> },

    ]

    return (
        <div className='w-full h-[100vh]'>
            <aside className='flex items-center flex-col'>
                <Logo />

                <ul className='w-full list'>
                    {sidebar.map((link, i) => (
                        <div key={i} className='w-auto'>
                            <Link key={i} className={`text-white`} href={link.href}>
                                <div className='flex items-center gap-2 p-3 px-5 w-full'>
                                    {link.icon}
                                    <p className='ml-3 text-2xl'>{link.text}</p>
                                </div>


                                <div className={`${pathname === link.href ? 'active' : 'not-active'}`} key={i}></div>
                            </Link>

                        </div>
                    ))}
                </ul>
            </aside>

            <main className='main bg-[#F0F6F7]'>
                {children}
            </main>

        </div>
    )
}

export default AdminContainer
