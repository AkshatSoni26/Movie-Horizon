import React, { useEffect, useState } from 'react'
import { tmdb } from '../../constant/constant.js';
import { useNavigate } from 'react-router-dom';
import { FRONTENED_URL } from '../../url/url.js';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';



function FullScreen({ data }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentMovie, setCurrentMovie] = useState()
    const navigate = useNavigate()

    useEffect(
        () => {
            // console.log(data)
            if (data) {
                setBackgroundImage(data[0]?.backdrop_path)
                setCurrentMovie(data[0])
            }
        },
        [data]
    )

    function setBackgroundImage(backdrop_path) {
        const screen = document.getElementById('FullScreen')
        screen.style.backgroundImage = `url(${tmdb.IMAGE_BASE + backdrop_path})`;
    }

    return (
        <div >
            <div id='FullScreen' className='position-relative'>
                <div className='d-flex position-absolute bottom-0' style={{ transform: 'translateY(-122px)' }}>
                    {
                        data?.map(
                            (item, key) => {
                                return (
                                    <div key={key} className='p-2 position-relative mouse mx-3' onMouseEnter={() => {
                                        setHoveredIndex(key)
                                        setBackgroundImage(item?.backdrop_path)
                                        setCurrentMovie(item)
                                    }}
                                    >
                                        <img src={tmdb.IMAGE_BASE + item.poster_path} alt={item.title} />
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <div className='movie-title-3 position-absolute' >
                <div className='movie-name my-2' style={{ fontSize: '30px' }}>{currentMovie?.title}</div>
                <button className='learn-more' onClick={() => navigate(FRONTENED_URL.SELECTED_MOVIE + '/' + currentMovie.id, {state:currentMovie})}>learn more</button>
            </div>
        </div>
    )
}

export default FullScreen