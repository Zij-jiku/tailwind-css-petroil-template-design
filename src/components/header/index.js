import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

function Header() {
    return (
        <header className='bg-black py-4 border-b-2 border-solid border-bordercolor'>
            <div className='max-w-container mx-auto'>
                <div className='flex text-white items-center'>
                    <div className='w-2/4 flex'>
                        <a href='#' className='font-poppins font-normal text-[14px] relative pl-6 after:absolute after:top-0 after:right-[-28px] after:w-0.5 after:h-full after:content-[""] after:bg-white'> <AiOutlineMail className='absolute top-1 left-0' /> mail@yourcompany.com</a>
                        <a href='#' className='font-poppins font-normal text-[14px] relative pl-6 ml-14'> <BiPhoneCall className='absolute top-1 left-0' /> +896 120 5889 (Toll free)</a>
                    </div>
                    <div className='w-2/4 flex justify-end gap-x-5'>
                        <a href=''>
                            <FaFacebookF />
                        </a>
                        <a href=''>
                            <AiOutlineTwitter />
                        </a>
                        <a href=''>
                            <AiOutlineLinkedin />
                        </a>
                        <a href=''>
                            <AiOutlineInstagram />
                        </a>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header