// axiosClient.js
import axios from 'axios';
import { api, tmdb } from '../constant/constant.js';

export const config = { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain", }, };

const axiosClient = axios.create({
    baseURL: tmdb.MOVIE_BASE,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api.ACCESS_TOKEN}`,
        // 'Api-Key': api.API_KEY,
    },
    httpsAgent:config,
});


export default axiosClient;
