import React from 'react'

const About = () => {
  return (
    <div 
     name="about"
     className="w-full h-screen bg-[#ff775e] shadow-inner z-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#f4a33d] ">About</p>
            </div>
            <p className="text-xl mt-10">Hi, I'm Terry Davis Raffael, but all my friends used to call me raffael or rafa, I'm a student from SMK Wira Harapan. I have 3 year's of experience at programing, I've been programing since 2020. The only langueges that I've been learning was Html, CSS, JavaScript, php, and C++. </p>
            
            <br />

            <p className="text-xl">My hobbies are Programing and Photography. I am still learning new langueges such as Next.Js, React, TypeScript, and tailwind. Yes, I did mention Photography, why did i mention this? it's because i love taking pictures most of my website is using my own shot of picture's. If you are interested on my picture's <a className="border-b-4 border-[#f4a33d] cursor-pointer hover:text-[#ff785d] hover:bg-[#fff3f1] hover:scale-105 duration-300 hover:ease-in-out drop-shadow-lg hover:rounded-lg hover:border-transparent hover:p-1" href="https://www.instagram.com/justme.raffael/">Click here</a></p>
        </div>
    </div>
  )
}

export default About