import React from 'react'

import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BiLocationPlus } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

function Contact() {
    return (
        <section className='bg-[#1F1F1F] pt-[150px] pb-[150px]'>
            <div className='max-w-container mx-auto flex'>
                <div className='w-5/12 text-white'>
                    <picture>
                        <img className='mb-4' src='images/b-logo.png' />
                    </picture>

                    <div className=''>
                        <a href='#' className='font-poppins font-normal text-[14px] flex items-center gap-3 mb-2'> <AiOutlineMail /> mail@yourcompany.com</a>
                        <a href='#' className='font-poppins font-normal text-[14px] flex items-center gap-3 mb-2'> <BiPhoneCall /> +896 120 5889 </a>
                        <a href='#' className='font-poppins font-normal text-[14px] flex items-center gap-3 mb-2'> <BiLocationPlus /> 101 Baker Street, New York, USA, 12345</a>
                    </div>

                    <div className='flex gap-x-5 mt-8'>
                        <a href=''>
                            <FaFacebookF  className='w-[29px] h-[29px] bg-primary rounded-full p-1 hover:bg-white hover:text-primary ease-linear duration-300' />
                        </a>
                        <a href=''>
                            <AiOutlineTwitter className='w-[29px] h-[29px] bg-primary rounded-full p-1 hover:bg-white hover:text-primary ease-linear duration-300'  />
                        </a>
                        <a href=''>
                            <AiOutlineLinkedin  className='w-[29px] h-[29px] bg-primary rounded-full p-1 hover:bg-white hover:text-primary ease-linear duration-300' />
                        </a>
                        <a href=''>
                            <AiOutlineInstagram  className='w-[29px] h-[29px] bg-primary rounded-full p-1 hover:bg-white hover:text-primary ease-linear duration-300' />
                        </a>
                    </div>

                </div>
                <div className='w-2/12'>
                    <h4 className='font-poppins font-bold text-[24px] text-white mb-4 mt-3'>Company</h4>
                    <ul className='font-poppins font-semibold text-base text-white flex flex-col gap-y-2'>
                        <li>
                            <a href='#'>Home</a>
                        </li>

                        <li>
                            <a href='#'>About</a>
                        </li>

                        <li>
                            <a href='#'>Services</a>
                        </li>

                        <li>
                            <a href='#'>Gallery</a>
                        </li>
                    </ul>

                </div>
                <div className='w-2/12'>
                    <h4 className='font-poppins font-bold text-[24px] text-white mb-4 mt-3'>Company</h4>
                    <ul className='font-poppins font-semibold text-base text-white flex flex-col gap-y-2'>
                        <li>
                            <a href='#'>Blog</a>
                        </li>

                        <li>
                            <a href='#'>Contact</a>
                        </li>

                        <li>
                            <a href='#'>Terms & Conditions</a>
                        </li>

                        <li>
                            <a href='#'>Privacy Policy</a>
                        </li>

                    </ul>
                </div>
                <div className='w-3/12'>
                    <h4 className='font-poppins font-bold text-[24px] text-white mb-4 mt-3'>Company</h4>
                    <div className='flex gap-x-2'>
                        <picture>
                            <img src='images/cert1.png' loading='lazy'/>
                        </picture>
                        <picture>
                            <img src='images/cert2.png' loading='lazy'/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact