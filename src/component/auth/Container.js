import Image from 'next/image'
import React from 'react'
import Logo from '../reusable/Logo'

const Container = ({ children, headMessage, subMessage }) => {
    return (
        <div className='h-[100vh] relative w-full'>
            <div className='w-full flex'>
                <div className='w-full lg:w-1/2'>
                    <h1>{headMessage}</h1>
                    <p>{subMessage}</p>
                    <form>
                        {children}
                    </form>
                </div>

                <Image alt='' src={''} className='hidden lg:flex w-1/2' />
            </div>

            <footer className="w-full bg-[#090B0E] h-[300px] absolute bottom-0 left-0 flex justify-start items-center px-5">
                <Logo style={'mt-[-50px] logo-lg'} />
            </footer>
        </div>
    )
}

export default Container
