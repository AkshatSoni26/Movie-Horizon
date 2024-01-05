import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios/axiosClient.js';
import { BACKEND_URL, FRONTENED_URL } from '../../url/url.js';
import Header from '../Constant-Parts/Header.jsx';
import MovieList from '../Constant-Parts/MovieList.jsx';
import { useNavigate } from 'react-router-dom';
import FullScreen from '../FullScreen/FullScreen.jsx';



function NowPlaying() {
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(
        () => {
            axiosClient.get(BACKEND_URL.NOW_PLAYING).then(
                (response) => {
                    const results = response.data.results
                    setData(results)
                }
            ).catch(
                (err) => console.log(err)
            );
        },
        []
    )

    function nowPlayingScreen() {
        navigate(FRONTENED_URL.NOW_PLAYING, { state: data })
    }

    return (
        <>
            <FullScreen data={data} />
            <section id='Trending'>
                <Header heading={`Currently playing`} fun={nowPlayingScreen} />
                <MovieList data={data} />
            </section>
        </>
    )
}

export default NowPlaying