import React from 'react'
export default function About() {
  return (
    <div className='about' id="about">
      <div className='about__content text-center  '>
        <h1 className='about__heading font-finger text-center
        xs:pt-10  xs:text-3xl s:text-4xl  lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl text-white '>ABOUT E-SUMMIT </h1>
        <div className=' grid
         md:grid-rows-3 md:grid-cols-6 gap-4 mt-[5%] xs:ml-10 xs:mr-10 md:ml-[13%] md:mr-[13%] text-white'>
          <div className='div-2 greeny md:col-span-4 md:rows-span-2 p-[3%] rounded card'>
         <h1 className='font-finger xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl' >VISION </h1>
          <p className='mt-[3%] xs:text-md sm:text-lg lg:text-xl xl:text-xl 3xl:text-5xl font-poppins'>An opportunity for the students to interact with college students which will give the aspiring students a clarity in vision.</p>
         </div>
         <div className='div-1 bronzy rounded drop-shadow-lg md:col-span-2 md:rows-span-2  p-[3%] card'>
          <h1 className='font-finger xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl mt-[2%]' >MISSION </h1>
          <p className='mt-[4%] xs:text-md sm:text-lg 3xl:text-5xl xl:text-xl font-poppins' >An initiative by IIIT Pune to educate the school students about business culture.</p>
         </div>
        
         <div className='div-3  platy  md:row-span-2 md:col-span-3 p-[3%]  backdrop-blur-lg rounded drop-shadow-lg card '>
         <h1  className='font-finger xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl '>Heading</h1>
         <p className='p-[3%] mt-[3%] xs:text-md sm:text-lg 3xl:text-5xl xl:text-xl font-poppins'>
          Round 1 will be a written exam which will have questions related to Reasoning, Basic English, General Knowledge, and Basics of Computers.
          </p>
          <p className='p-[3%]  xs:text-md sm:text-lg 3xl:text-5xl xl:text-xl font-poppins'>
          Based on the results of Round 1, top 32 students will be called to the campus of IIIT Pune and will be give a chance to participate in various events.
          </p>
         </div>
         <div className='div-4 silvery md:col-span-3 md:row-span-1 p-[3%]  rounded drop-shadow-lg card'>
         <h1  className='font-finger xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl md:pb-7'>Core Values</h1>
         <div className='flex  items-center justify-around'>
         <img className='w-20 3xl:w-28'  src='https://www.freeiconspng.com/thumbs/trophy-png/trophy-png-14.png' alt='' />
         <img className='w-20 3xl:w-28' src='https://www.freeiconspng.com/uploads/badge-icon-png-22.png' alt=''/>
         <img className='w-20 3xl:w-28'
          src='target-arrow.png' alt=''
         />
         </div>
         </div>
         <div className='div-5 pinky md:col-span-3 p-[3%]  rounded drop-shadow-lg card'>
         <h1 className='font-finger xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl '>PRIZES </h1>
          <p className='p-[3%] xs:text-md sm:text-lg xl:text-xl 3xl:text-5xl font-poppins'>
          There are cash prizes of upto INR 25000.
          </p>
         </div>
        </div>
      </div>
    </div>
  )
}

