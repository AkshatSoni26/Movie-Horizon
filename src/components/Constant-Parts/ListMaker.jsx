import React, { useEffect } from 'react'
import { tmdb } from '../../constant/constant.js'
import { useNavigate, useParams } from 'react-router-dom';
import { FRONTENED_URL } from '../../url/url.js';

const ListMaker = ({ data }) => {

    // console.log('ListMaker =================================>', data);

    const { id } = useParams()

    // console.log('id===========>', id);

    const navigate = useNavigate()

    useEffect(
        () => {
            window.scrollTo(10, 0);
        }, [id]
    )


    return (
        <>
            {

                data?.map(
                    (item, key) => {
                        return (
                            <div key={key} className='p-2 position-relative mouse' onClick={() => {
                                navigate(FRONTENED_URL.SELECTED_MOVIE + '/' + item.id, { state: item, })
                                window.location.reload()
                            }}>
                                <img src={tmdb.IMAGE_BASE + item?.poster_path} alt={item?.title} />
                                <div className='movie-title position-absolute'>
                                    <div className='movie-name my-1'>{item?.title}</div>
                                    <div className='release-date my-1'>{item?.release_date}</div>
                                    <div className='release-date my-1'>{item?.adult ? `18+` : null}</div>
                                </div>
                            </div>
                        )
                    }
                )
            }

        </>
    )
}


export default ListMaker