import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { tmdb } from '../../constant/constant.js'
import axiosClient from './../../axios/axiosClient';
import Header from '../../components/Constant-Parts/Header.jsx';
import MovieList from '../../components/Constant-Parts/MovieList.jsx';
import { FRONTENED_URL } from '../../url/url.js';
import { FaArrowLeft } from "react-icons/fa6";



function SelectedMovie() {

    const data = useLocation().state
    const navigate = useNavigate()

    const [movieDetail, setMovieDetail] = useState()
    const [similarMovies, setSimilarMovies] = useState()
    const [movieReviwes, setMovieReviwes] = useState()
    const [movieVideos, setMovieVideos] = useState()


    function movie_detail(movie_id) {
        axiosClient.get(`${movie_id}`).then(
            (response) => {
                setMovieDetail(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    function similar_movies(movie_id) {
        axiosClient.get(`${movie_id}/similar`).then(
            (response) => {
                setSimilarMovies(response.data.results)
            }
        ).catch(
            (error) => {
                console.log("error in getSimilarMovies=========>", error)
            }
        )
    }

    function movie_reviwes(movie_id) {
        axiosClient.get(`${movie_id}/reviews`).then(
            (response) => {
                setMovieReviwes(response.data.results)
            }
        ).catch(
            (error) => {
                console.log("error in getMovieReviwes=========>", error)
            }
        )
    }

    function movie_videos(movie_id) {
        axiosClient.get(`${movie_id}/videos`).then(
            (response) => {
                setMovieVideos(response.data.results)
            }
        ).catch(
            (error) => {
                console.log("error in getMovieVideos=========>", error)
            }
        )
    }

    useEffect(
        () => {
            if (data) {
                const movie_id = data.id
                movie_detail(movie_id)
                similar_movies(movie_id)
                movie_reviwes(movie_id)
                movie_videos(movie_id)
            }
        },
        [data]
    )

    function Generes(data) {
        let resultString = '';

        for (let i = 0; i < data?.length; i++) {
            resultString += data[i].name + ', ';
        }
        return resultString.slice(0, -2)
    }

    function gotoSimilar() {
        navigate(FRONTENED_URL.SIMILAR, { state: similarMovies })
    }

    function trial_opener(id) {
        const videoFrame = document.getElementById(id);

        videoFrame.addEventListener('mouseenter', () => {
            videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });

        videoFrame.addEventListener('mouseleave', () => {
            videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    }

    return (
        <div className='SelectedMovie px-2'>

            <div className='p-3 Header'>
                <FaArrowLeft className='mouse' size={25} onClick={() => navigate(FRONTENED_URL.HOME)} />
            </div>

            {
                movieDetail
                    ?
                    <div>
                        <div className='d-flex'>
                            <div>
                                <img className='mb-5 mt-3 me-5 ms-3' style={{ height: '60vh' }} src={tmdb.IMAGE_BASE + data?.poster_path} alt='' />
                            </div>

                            <div className='mt-3 w-75'>
                                <h1>{data?.title}</h1>
                                <p className='w-75'>{data?.overview}</p>
                                <p className=''> <span style={{ color: 'red' }}> release date :- </span>{data.release_date}</p>
                                <p className=''> <span style={{ color: 'red' }}> genres :- </span>{Generes(movieDetail.genres)}</p>
                                <p className=''> <span style={{ color: 'red' }}> original language :- </span>{Generes(movieDetail.spoken_languages)}</p>
                                {
                                    movieDetail?.homepage
                                    &&
                                    <div className='d-flex justify-content-center w-75'>
                                        <button className='learn-more' style={{ width: '200px' }} onClick={() => window.open(movieDetail?.homepage, '_blank')}>clear here to watch</button>
                                    </div>
                                }
                            </div>
                        </div>

                        <br />

                        {/*----------------------- Videos---------------- */}


                        {
                            movieVideos
                            &&
                            <div>
                                <h3>some videos of the movie</h3>

                                <div className='videos'>
                                    {
                                        movieVideos?.map(
                                            (movie, key) => {
                                                return (
                                                    <iframe onMouseEnter={() => trial_opener(`videos-iframe-${key}`)} id={`videos-iframe-${key}`} key={key} className='videos-iframe m-3' src={`https://www.youtube.com/embed/${movie.key}`} />
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        }

                        <br />
                        {/*----------------------- similar---------------- */}
                        <div>
                            {
                                similarMovies
                                    ?
                                    <>
                                        <Header heading={`Similare ones`} fun={gotoSimilar} />
                                        <MovieList data={similarMovies} />
                                    </>
                                    :
                                    null
                            }
                        </div>

                    </div>
                    :
                    <div style={{ width: '100vw', height: '80vh' }} className='d-flex justify-content-center align-items-center'>Loading...</div>
            }
        </div>
    )
}

export default SelectedMovie