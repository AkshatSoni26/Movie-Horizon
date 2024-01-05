import React from 'react';
import './css/index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { FRONTENED_URL } from './url/url.js';
import NowPlayingMoviesList from './Pages/NowPlayong/NowPlayingMoviesList.jsx';
import SelectedMovie from './Pages/SelectedMovie/SelectedMovie.jsx';
import Search from './Pages/search/Search.jsx';

const routes = createBrowserRouter(
    createRoutesFromElements(
        [
            <Route path={FRONTENED_URL.HOME} element={<Home />} />,

            <Route path={FRONTENED_URL.NOW_PLAYING} element={<NowPlayingMoviesList />} />,
            <Route path={FRONTENED_URL.POPULAR} element={<NowPlayingMoviesList />} />,
            <Route path={FRONTENED_URL.TOP_RATED} element={<NowPlayingMoviesList />} />,
            <Route path={FRONTENED_URL.UPCOMING} element={<NowPlayingMoviesList />} />,
            <Route path={FRONTENED_URL.SIMILAR} element={<NowPlayingMoviesList />} />,
            
            <Route path={`${FRONTENED_URL.SELECTED_MOVIE}/:id` } element={<SelectedMovie />} />,
            <Route path={FRONTENED_URL.SEARCH } element={<Search />} />,
        ]
    )
)

function App() {
    return (
       <RouterProvider router={routes} />
    )
}

export default App