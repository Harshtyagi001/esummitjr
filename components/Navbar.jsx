import React from 'react'
// import './Navbar.css'
export default function Navbar() {
  return (
    <div className='container w-[94%] mx-auto'>
      <div className='navbar text-white flex
      justify-between items-center w-full  py-8 ' >
          <div className='left'>
          <img className='w-20' src='ecell.png' alt="ecell"/>
          </div>
          <div className='right text-2xl font-semibold md:flex-row space-x-14 '>
          
            <span><a className='' href="#">HOME</a> </span>
            <span><a className='' href="#">ABOUT</a> </span>
            <span><a className='' href="#">FAQs</a> </span>
            <span><a className='' href="#">CONTACT</a> </span>
            {/* <span><a className='' href="#">FEEDBACK</a> </span> */}
            {/* <span className='w-20' ><img src='logo.png' alt="eSummit"/></span> */}
          </div>
        </div>
    </div>
  )
}