import { Typography } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
// import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant='h5'>
                    About E-Cell
                </Typography>
                <Typography>
                    Lorem-30
                    kfkdajgm;mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkegsldl;k;


                </Typography>
                
            </div>
            <div>
                <Typography variant='h6'>Social Media</Typography>
                <a href="#" target="black" className='pt-1'>
                    <BsGithub />
                </a>
                <a href="#" target="black" className='pt-2'>
                    <BsTwitter />
                </a>
                <a href="#" target="black" className='pt-2'>
                    <BsInstagram />
                </a>
                <a href="#" target="black" className='pt-3'>
                    <BsLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer