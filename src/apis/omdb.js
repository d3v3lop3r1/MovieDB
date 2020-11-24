import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.omdbapi.com',
    params: {apikey:'2312da1f'}
})