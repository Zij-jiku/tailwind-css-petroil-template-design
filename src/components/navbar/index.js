import React from 'react'

function Navbar() {
    return (
        <nav className='bg-primary py-7'>
            <div className='max-w-container mx-auto'>
                <div className='flex'>
                    <div className='w-1/5'>
                        <picture>
                            <a href='#'>
                                <img src='images/logo.png' loading='lazy' />
                            </a>
                        </picture>
                    </div>
                    <div className='w-4/5 flex items-center justify-end'>
                        <ul className='font-poppins font-semibold text-base text-white flex gap-x-12'>
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

                            <li>
                                <a href='#'>Blog</a>
                            </li>
                        </ul>
                        <a href='#' className='inline-block font-poppins font-semibold text-white text-base border border-solid border-white rounded-md py-3 px-8 ml-16'>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar