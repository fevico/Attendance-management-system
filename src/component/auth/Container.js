import Image from 'next/image'
import React from 'react'
import Logo from '../reusable/Logo'
import authImage from '../../assets/image/authentication.png'

const Container = ({ children, headMessage, subMessage }) => {
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center gap-3 px-5'>
                <div className='w-full lg:w-auto  p-3'>
                    <h1 className='font-[600]' style={{fontSize: "40px",}}>{headMessage}</h1>
                    <p className=' font-[400]' style={{fontSize: "20px",}}>{subMessage}</p>
                    <div>
                        {children}
                    </div>
                </div>

                <div className='hidden lg:flex py-10 w-full ml-[-50px]'>
                <Image alt='' src={authImage}/>
                </div>
            </div>
            <footer className="w-full flex justify-start items-center px-5">
                <Logo style={'mt-[-50px] logo-lg'} />
            </footer>
        </div>
    )
}

export default Container
