import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { FRONTENED_URL } from '../../url/url.js'
import axios from 'axios'
import { config } from '../../axios/axiosClient.js'
import { api } from '../../constant/constant.js'
import ListMaker from '../../components/Constant-Parts/ListMaker.jsx'

function Search() {
    const navigate = useNavigate()

    const [search, setSearch] = useState()
    const [searchdata, setSearchData] = useState()

    function searchfun(search) {

        axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${search}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${api.ACCESS_TOKEN}`,
                },
                httpsAgent: config,
            }
        ).then(
            (response) => {
                setSearchData(response.data.results)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }


    return (
        <div className='SelectedMovie px-2 '>

            <div className='p-3 Header'>
                <FaArrowLeft className='mouse' size={25} onClick={() => navigate(-1)} />
                <input value={search} className='ms-3 p-2' onChange={(e) => {
                    setSearch(e.target.value)
                    searchfun(e.target.value)
                }}
                placeholder='Type here' />
            </div>

            <div className='movie-list d-flex' style={{ flexWrap: 'wrap' }}>
                {

                    search
                        ?
                        searchdata
                            ?
                                <ListMaker data={searchdata} />
                            :
                            <div style={{width:'100vw', height:'80vh'}} className='d-flex justify-content-center align-items-center'>Loading...</div>
                        :
                        <div style={{width:'100vw', height:'80vh'}} className='d-flex justify-content-center align-items-center'>Type something for Search</div>
                }
            </div>
        </div>
    )
}

export default Search