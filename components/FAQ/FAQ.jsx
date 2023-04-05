// import React from 'react'
// import { useState, useRef, useEffect } from 'react'
// import {FiPlus} from 'react-icons/fi'


// const FAQ = () => {
//     const [active, setActive] = useState(false);

//     const contentRef = useRef(null);
  
//     useEffect(() => {
//       contentRef.current.style.maxHeight = active
//         ? `${contentRef.current.scrollHeight}px`
//         : "0px";
//     }, [contentRef, active]);
  
//     const toggleAccordion = () => {
//       setActive(!active);
//     };
//   return (
//     <div className='mt-10'>
//     <h3 className='font-finger text-4xl text-center xs:hidden md:inline-block '> Frequently Asked Questions </h3>
//       <div className="FAQ text-center">
//         <div>
//           <button
//             className={`question-section bg-transparent border-solid border-2 border-sky-900 rounded-lg cursor-pointer w-[92vw] shadow-custom  ${active}`}
//             onClick={toggleAccordion}
//           >
//             <div>
//               <div className="question-align item-center flex min-h-[10px] text-left">
//                 <h4 className="question-style ml-2">
//                   Why do you like web developemnt
//                 </h4>
//                 <FiPlus
//                   className={active ? `question-icon rotate-icon` : `question-icon`}
//                 />
//               </div>
//               <div
//                 ref={contentRef}
//                 className={active ? `answer answer-divider` : `answer`}
//               >
//                 <p>Because I love coding</p>
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FAQ

import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import "./Faqs.module.css";
// import SubHeading from "../SubHeading";

export default function FaqSection() {
  const [questions] = useState(data);

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="md:w-3/4 w-[100%] bg-[#FDEC0] space-y-14" id="faqs">
        {/* <div className="p-2 pb-14 text-center font-Montserrat font-bold text-4xl md:text-6xl flex flex-col items-center justify-center"> */}
        <div>
          <h1 > FAQ'S</h1>
        </div>
        {/* <hr className="secheadingfaq" /> */}
        {/* </div> */}
        <div>
          {questions.map((question) => (
            <SingleQuestion {...question} key={question.id} />
          ))}
        </div>
      </div>
    </div>
  );
}