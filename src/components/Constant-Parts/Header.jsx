import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Header({ heading, fun=() => {console.log('this is heading')}}) {
    return (
        <div className='d-flex justify-content-between align-items-center m-2 '>
            <div className='heading'>
                {heading}
            </div>

            <div className='mouse' onClick={fun}>
                see more <FaArrowRightLong />
            </div>
        </div>

    )
}

export default Header