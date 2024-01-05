import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className=' d-flex flex-column justify-content-center d-flex align-items-center'>
            <div className='d-flex'>
                <div className='connect-link' onClick={() => window.open('https://in.linkedin.com/in/akshatsoni26', '_blank')}><CiLinkedin size={25} /></div>
                <div className='connect-link' onClick={() => window.open('https://github.com/AkshatSoni26', '_blank')}><FaGithub size={25} /></div>
            </div>
            <div> &#169; by Akshat Soni 😎 </div>
        </div>
    )
}

export default Footer