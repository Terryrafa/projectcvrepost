import React from 'react'
import sd from '../assets/education/sd.jpg'
import smp from '../assets/education/smp.jpeg'
import smk from '../assets/education/smk.jpg'

const Education = () => {

    

  return (
    <div name="education" className='bg-white w-full text-black md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f4a33d]'>Education</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:pt-6 px-12 sm:px-0'>
            
                <div className='drop-shadow-lg rounded-lg'>
                    <img src={sd} alt="" className='rounded-lg'/>
                    <div className='py-2 m-4'>
                        <p>Primary</p>
                        <p>SD Pelita Bangsa 2012 - 2018</p>
                    </div>
                </div>
                <div className='drop-shadow-lg rounded-lg'>
                    <img src={smp} alt="" className='rounded-lg'/>
                    <div className='py-2 m-4'>
                        <p>Junior High</p>
                        <p>SMP Negeri 4 Denpasar 2018 - 2021</p>
                    </div>
                </div>
                <div className='drop-shadow-lg rounded-lg'>
                    <img src={smk} alt="" className='rounded-lg'/>
                    <div className='py-2 m-4'>
                        <p>High School</p>
                        <p>SMK Wira Harapan 2021 - Now</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Education