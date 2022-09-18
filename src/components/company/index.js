import React from 'react'

function Company() {
  return (
    <section className='py-28 bg-[#F0F0F0]'>
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-2/5 bg-primary'>
                    <h2 className='font-poppins font-bold text-4xl leading-[54px] pl-16 py-24 w-[280px] text-white'>Learn more about our company</h2>
                </div>
                <div className='w-3/5 flex justify-center items-center' style={{ background: "url(images/company-bg.png)" }}>
                    <a href='#' className='inline-block font-poppins font-semibold text-primary text-base bg-white py-3 px-8 uppercase border border-solid border-white hover:bg-transparent hover:border-white hover:text-white ease-linear duration-500 rounded-md'>Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company