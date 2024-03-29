import React from 'react'
import NowPlaying from '../../components/now_playing/NowPlaying.jsx'
import CommingSoon from '../../components/comming_soon/CommingSoon.jsx'
import Popular from '../../components/popular/Popular.jsx'
import TopRated from '../../components/top_rated/TopRated.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Home() {
    return (
        <div>
            <Header />
            <NowPlaying />
            <CommingSoon />
            <Popular />
            <TopRated />
            <Footer />
        </div>
    )
}

export default Home