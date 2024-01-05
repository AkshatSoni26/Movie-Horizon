import React from 'react'
import { tmdb } from '../../constant/constant.js'
import ListMaker from './ListMaker.jsx'

function MovieList({ data }) {
    return (
        <>
            <div className='movie-list d-flex'>
                {
                    data
                        ?
                        <ListMaker data={data} />
                        :
                        <div style={{width:'100vw', height:'80vh'}} className='d-flex justify-content-center align-items-center'>Loading...</div>
                }
            </div>
        </>
    )
}

export default MovieList