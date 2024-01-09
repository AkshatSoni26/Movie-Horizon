import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios/axiosClient.js';
import { BACKEND_URL, FRONTENED_URL } from '../../url/url.js';
import Header from '../Constant-Parts/Header.jsx';
import MovieList from '../Constant-Parts/MovieList.jsx';
import { useNavigate } from 'react-router-dom';

function Popular() {


    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(
        () => {
            axiosClient.get(BACKEND_URL.POPULAR).then(
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
        navigate(FRONTENED_URL.POPULAR, {state: data})
    }

    return (
        <section id='Popular'>
            <Header heading={`Popular`} fun={nowPlayingScreen}/>
            <MovieList data={data} />
        </section>
    )
}

export default Popular