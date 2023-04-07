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
       <h1 className='text-center xs:text-3xl md:text-4xl font-happy  3xl:text-8xl tracking-wider'>About E-Cell</h1>
          <div className='abt_content font-primerg xs:text-md md:text-xl 3xl:text-4xl '>The Entrepreneurship Cell of IIIT Pune is a non-profit organization that aims to foster the entrepreneurial spirit of young people and provide a platform for the untapped potential of the nation. Through networking with student enterprises, we focus on nurturing the 'Ideas' of budding entrepreneurs and enabling them to blossom into worthwhile endeavors.
 </div>
 <div className='flex justify-center gap-[20%] mt-[3%]'>
  <a href='https://www.linkedin.com/company/e-cell-iiit-pune/?originalSubdomain=in' target='blank'> <AiOutlineLinkedin className='socials'  /></a>

  <a target='blank' href='https://www.youtube.com/channel/UCBRfXeWo-YSFt25wlZGr30w'><AiOutlineYoutube className='socials '/></a>

  <a target='blank' href='https://www.instagram.com/ecell_iiitp/?hl=en'> <AiOutlineInstagram className='socials'/></a>
 </div>
        </div>
        <div className={`${Styles.right}`}>
        <h5 className='text-center xs:text-3xl md:text-4xl mt-[1%] mb-[6%] font-happy 3xl:text-8xl tracking-wider'>Get in Touch</h5>
           <form className={`${Styles.form}`} ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name ' required />
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='3' placeholder='Your Message' required></textarea>
              <button className='btn btn_primary' type='submit'>Send Message</button>
           </form>
        </div>
      </div>
    </section>
  )
}