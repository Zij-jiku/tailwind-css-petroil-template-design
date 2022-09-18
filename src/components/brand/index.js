import React from 'react'

function Brand() {
    return (
        <section className='bg-[#FFFFFF] py-[134px]'>
            <div className='max-w-container mx-auto flex justify-between gap-2'>
               <picture>
                 <img src='images/brand1.png' loading='lazy'/>
               </picture>
               <picture>
                 <img src='images/brand2.png' loading='lazy'/>
               </picture>
               <picture>
                 <img src='images/brand3.png' loading='lazy'/>
               </picture>
               <picture>
                 <img src='images/brand4.png' loading='lazy'/>
               </picture>
            </div>
        </section>
    )
}

export default Brand