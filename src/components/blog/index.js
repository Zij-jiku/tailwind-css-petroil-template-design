import React from 'react'

import { FaAngleRight } from 'react-icons/fa';
// 

function Blog() {
  return (
    <section className='bg-[#F0F0F0] py-24'>
        <div className='max-w-container mx-auto flex justify-between'>
            <div className='w-[339px] group cursor-pointer' style={{ background: "url(images/blog1.png)" }}>
                <div className='w-full h-full bg-darklight px-11 py-16'>
                    <h2 className='font-poppins font-bold text-2xl text-white group-hover:text-primary ease-linear duration-500'>
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                    </h2>
                    <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-transparentbgcolor py-3 px-8 uppercase mt-7 border border-solid border-transparentbgcolor group-hover:bg-transparent group-hover:border-transparentbgcolor ease-linear duration-500 rounded-md'>Learn More</a>
                </div>
            </div>

            <div className='w-[339px] group cursor-pointer' style={{ background: "url(images/blog1.png)" }}>
                <div className='w-full h-full bg-darklight px-11 py-16'>
                    <h2 className='font-poppins font-bold text-2xl text-white group-hover:text-primary ease-linear duration-500'>
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                    </h2>
                    <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-transparentbgcolor py-3 px-8 uppercase mt-7 border border-solid border-transparentbgcolor group-hover:bg-transparent group-hover:border-transparentbgcolor ease-linear duration-500 rounded-md'>Learn More</a>
                </div>
            </div>

            <div className='w-[339px] group cursor-pointer' style={{ background: "url(images/blog1.png)" }}>
                <div className='w-full h-full bg-darklight px-11 py-16'>
                    <h2 className='font-poppins font-bold text-2xl text-white group-hover:text-primary ease-linear duration-500'>
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                    </h2>
                    <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-transparentbgcolor py-3 px-8 uppercase mt-7 border border-solid border-transparentbgcolor group-hover:bg-transparent group-hover:border-transparentbgcolor ease-linear duration-500 rounded-md'>Learn More</a>
                </div>
            </div>
        </div>
        <div className='max-w-container mx-auto flex justify-end mt-4'>
            <a href='' className='flex justify-center items-center font-poppins font-bold text-[16px]'>MORE FROM THE BLLOG <FaAngleRight /> </a>
        </div>
        
    </section>
  )
}

export default Blog