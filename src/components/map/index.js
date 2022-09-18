import React from 'react'

function Map() {
    return (
        <section className='border-b-2 border-solid border-bordercolor'>
            <div className='w-full h-[450px]' style={{ background: "url(images/map.png)" }}>
            </div>

            <div className='bg-primary py-7'>
                <div className='max-w-container mx-auto'>
                    <div className='flex justify-between'>
                        <h2 className='font-poppins font-bold text-[32px] text-white'>Want to join as member branch in your area?</h2>
                        <a href='#' className='inline-block font-poppins font-semibold text-white text-base border border-solid border-white rounded-md py-3 px-8'>Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map