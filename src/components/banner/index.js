import React from 'react'

function Banner() {
    return (
        <div style={{ background: "url(images/banner-bg.png)" }}>
            <div className='w-full h-full bg-darklight py-64'>
                <div className='max-w-container mx-auto text-white'>
                    <h1 className='font-poppins font-bold text-[64px] w-[842px]'>
                        We exist since 1975 on the oil and gas industry.
                    </h1>
                    <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-primary py-3 px-8 uppercase mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-500 rounded-md'>Learn More</a>
                </div>

            </div>
        </div>
    )
}

export default Banner