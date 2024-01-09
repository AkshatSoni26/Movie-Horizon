import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios/axiosClient.js';
import { BACKEND_URL, FRONTENED_URL } from '../../url/url.js';
import Header from '../Constant-Parts/Header.jsx';
import MovieList from '../Constant-Parts/MovieList.jsx';
import { useNavigate } from 'react-router-dom';

function CommingSoon() {

    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(
        () => {
            // console.log('App is running');
            axiosClient.get(BACKEND_URL.UPCOMING).then(
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
        navigate(FRONTENED_URL.UPCOMING, {state: data})
    }

    return (
        <section id='Upcoming'>
            <Header heading={`Coming soon`} fun={nowPlayingScreen}/>
            <MovieList data={data} />
        </section>
    )
}

export default CommingSoon