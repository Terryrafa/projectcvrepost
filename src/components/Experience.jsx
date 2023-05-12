import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'

const Experience = () => {


  return (
    <div name='experience' className='bg-[#292929] w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white pt-36 sm:pt-48'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#f4a33d] p-2 inline'>Experience</p>
                <p className='py-6'>These are the langueges I've used with</p>
             </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-12 sm:pt-28 '>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg hover:shadow-orange-500 ease-in-out'>
                    <img src={html} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>HTML</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg hover:shadow-blue-500 ease-in-out'>
                    <img src={css} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>CSS</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg hover:shadow-yellow-400 ease-in-out'>
                    <img src={javascript} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>Html</p>
            </div>

            <div className='shadow-md hover:scale-105 py-2 rounded-lg hover:shadow-white duration-300 ease-in-out'>
                    <img src={github} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>GitHub</p>
            </div>


           
        </div>
    </div>
  )
}

export default Experience