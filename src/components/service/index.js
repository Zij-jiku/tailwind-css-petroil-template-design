import React from 'react'

function Service() {
  return (
    <section className='pt-7 bg-[#F0F0F0]'>
        <div className='flex flex-wrap'>
          <div className='w-2/4 flex flex-col justify-center items-end'>
            <h2 className='font-poppins font-bold text-[64px] mr-36'>Our Services</h2>
            <p className='font-poppins font-medium text-base w-[405px] mr-36'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className='w-2/4' style={{ background: "url(images/service1.png)" }}>
            <div className='bg-darklight py-36 px-28'>
              <h2 className='font-poppins font-bold text-[36px] text-white'>Modern natural oil and gas refineries.</h2>
              <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-primary py-3 px-8 uppercase mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-500 rounded-md'>Learn More</a>
            </div>
          </div>

          <div className='w-2/4' style={{ background: "url(images/service2.png)" }}>
            <div className='bg-darklight py-36 px-28'>
              <h2 className='font-poppins font-bold text-[36px] text-white'>Supply of national industries.</h2>
              <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-primary py-3 px-8 uppercase mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-500 rounded-md'>Learn More</a>
            </div>
          </div>

          <div className='w-2/4' style={{ background: "url(images/service3.png)" }}>
            <div className='bg-darklight py-36 px-28'>
              <h2 className='font-poppins font-bold text-[36px] text-white'>National fuel distribution and supply.</h2>
              <a href='#' className='inline-block font-poppins font-semibold text-white text-base bg-primary py-3 px-8 uppercase mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-500 rounded-md'>Learn More</a>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Service