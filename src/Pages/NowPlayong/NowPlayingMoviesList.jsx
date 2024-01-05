import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ListMaker from '../../components/Constant-Parts/ListMaker.jsx'
import { FaArrowLeft } from 'react-icons/fa6'

function NowPlayingMoviesList() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()

  return (
    <div className='SelectedMovie px-2 '>
      <div className='p-3 NowPlayingMoviesList d-flex align-items-center'>
        <FaArrowLeft className='mouse' size={25} onClick={() => navigate(-1)} />
        <h2 className='m-0 ms-2'>{location.pathname.substring(1).toUpperCase().replace(/-/g, ' ')}</h2>
      </div>
      <div className='movie-list d-flex' style={{ flexWrap: 'wrap' }}>
        <ListMaker data={data} />
      </div>
    </div>
  )
}

export default NowPlayingMoviesList