import React from 'react'
export default function About() {
  return (
    <div className='about' id="about">
      <div className='about__content text-center cursor-default '>
        <h1 className='about__heading font-happy text-center
        xs:pt-10  xs:text-3xl s:text-4xl  lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl text-white '>ABOUT E-SUMMIT </h1>
        <div className=' grid
         md:grid-rows-3 md:grid-cols-6 gap-4 mt-[5%] xs:ml-10 xs:mr-10 md:ml-[13%] md:mr-[13%] text-white'>
          <div className=' div-2 greeny md:col-span-4 md:rows-span-2 p-[3%] rounded card'>
         <h1 className='font-andromeda xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl  tracking-wider' >Vision </h1>
          <p className='mt-[3%] xs:text-md sm:text-lg lg:text-xl xl:text-2xl 3xl:text-5xl font-primerg'>An opportunity for the students to interact with college students which will give the aspiring students a clarity in vision.</p>
         </div>
         <div className='div-1 bronzy rounded drop-shadow-lg md:col-span-2 md:rows-span-2  p-[3%] card'>
          <h1 className='font-andromeda xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl mt-[2%] tracking-wider' >Mission </h1>
          <p className='mt-[4%] xs:text-md sm:text-lg 3xl:text-5xl xl:text-2xl font-primerg' >Initiative by E-Cell IIIT Pune to educate school students about business culture.</p>
         </div>
        
         <div className='div-3  platy  md:row-span-2 md:col-span-3 p-[3%]  backdrop-blur-lg rounded drop-shadow-lg card '>
         <h1  className='font-andromeda xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl  tracking-wider'>Details</h1>
         <p className='p-[3%] mt-[3%] xs:text-md sm:text-lg 3xl:text-5xl xl:text-2xl font-primerg'>
          Round 1 will be a written exam which will have questions related to Reasoning, English, General Knowledge, and Basics of Computers.
          </p>
          <p className='p-[3%]  xs:text-md sm:text-lg 3xl:text-5xl xl:text-2xl font-primerg'>
          Based on the results of Round 1, top 32 students will be called to the campus of IIIT Pune and will be give a chance to participate in various events.
          </p>
         </div>
         <div className='div-4 silvery md:col-span-3 md:row-span-1 p-[3%]  rounded drop-shadow-lg card'>
         <h1  className='font-andromeda xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl md:pb-7 tracking-wider'>Eligibility</h1>
         <p className='p-[3%] xs:text-md sm:text-lg xl:text-2xl 3xl:text-5xl font-primerg'>
         This event is open to students pursuing their VIII, IX, and X standards.
          </p>
         </div>
         <div className='div-5 pinky md:col-span-3 p-[3%]  rounded drop-shadow-lg card'>
         <h1 className='font-andromeda xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl  tracking-wider'>Prizes </h1>
          <p className='p-[3%] xs:text-md sm:text-lg xl:text-2xl 3xl:text-5xl font-primerg'>
          There are cash prizes of upto INR 25000.
          </p>
          <div className='flex  items-center justify-around'>
         <img className='w-20 3xl:w-28'  src='https://www.freeiconspng.com/thumbs/trophy-png/trophy-png-14.png' alt='' />
         <img className='w-20 3xl:w-28' src='https://www.freeiconspng.com/uploads/badge-icon-png-22.png' alt=''/>
         <img className='w-20 3xl:w-28'
          src='target-arrow.png' alt=''
         />
         </div>
         </div>
        </div>
      </div>
    </div>
  )
}

