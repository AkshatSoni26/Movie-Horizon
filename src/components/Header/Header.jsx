import React from 'react'
import movieHorizon from '../../images/logo.png'
import { FiSearch } from "react-icons/fi";
import { FRONTENED_URL } from '../../url/url.js';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate()
    return (
        <div className='Header d-flex justify-content-between align-items-center px-2'>
            <div className='m-2' >
                <img style={{ width: '210px', marginLeft: '-26px' }} src={movieHorizon} alt='' />
            </div>
            <div className='d-flex align-items-center'>
                <a className='m-2' href='#Trending'>Trending</a>
                <a className='m-2' href='#Upcoming'>Upcoming</a>
                <a className='m-2' href='#Popular'>Popular</a>
                <a className='m-2' href='#Top-Reated'>Top Reated</a>
                <div className='mouse ms-3 me-2' onClick={() => navigate(FRONTENED_URL.SEARCH)}> <FiSearch size={28} /> </div>
            </div>
        </div>

    )
}

export default Header