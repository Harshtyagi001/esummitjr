import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinBoxFill, RiMessengerLine,RiInstagramFill} from 'react-icons/ri'
import {AiOutlineWhatsApp,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineYoutube} from 'react-icons/ai'
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';
import Styles from '../styles/Contact.module.scss'

export const Contact = () => {
  
  const form =useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6bhnbms', 'template_gk7qquj', form.current, 'TKCZMNFPzFyFTgrz0')
      e.target.reset()
  };
  return (
    <section className='text-white'  id='connect'>
      
      <div className={`${Styles.contact_container} `}>
        
        <div className='flex flex-col gap-8' >
       <h1 className='text-center xs:text-3xl md:text-4xl font-happy pt-2  3xl:text-8xl tracking-wider cursor-default '>About E-Cell</h1>
          <div className='abt_content font-primerg xs:text-md md:text-xl 3xl:text-4xl cursor-default'>
          <p className='mb-4'>The Entrepreneurship Cell of IIIT Pune is a non-profit organization that aims to foster the entrepreneurial spirit of young people and provide a platform for the untapped potential of the nation.
          </p>
          <p>
          We firmly believe in the four pillars of a successful startup - 'Think', 'Innovate', 'Sell' and 'Prosper'. E-Cell, IIIT Pune has successfully developed and carried out numerous events in recent years, and it continues to embrace entrepreneurial thinking while also making sustainable social impacts. 
          </p>

 </div>
 <div className='flex justify-center gap-[20%] mt-[3%]'>
  <a href='https://www.linkedin.com/company/e-cell-iiit-pune/?originalSubdomain=in' target='blank'> <AiOutlineLinkedin className='socials'  /></a>

  <a target='blank' href='https://www.youtube.com/channel/UCBRfXeWo-YSFt25wlZGr30w'><AiOutlineYoutube className='socials '/></a>

  <a target='blank' href='https://www.instagram.com/ecell_iiitp/?hl=en'> <AiOutlineInstagram className='socials'/></a>
 </div>
        </div>
        <div className={`${Styles.right}`}>
        <h5 className='text-center xs:text-3xl md:text-4xl mt-[1%] mb-[6%] font-happy 3xl:text-8xl tracking-wider cursor-default'>Get in Touch</h5>
           <form className={`${Styles.form}`} ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Full Name ' required />
              <input type='email' name='email' placeholder='Email' required/>
              <textarea name='message' rows='3' placeholder='Your Message' required></textarea>
              <button className='btn btn_primary' type='submit'>Send Message</button>
           </form>
        </div>
      </div>
    </section>
  )
}