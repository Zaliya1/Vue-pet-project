import axios from "axios";

export const request = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    headers: {
        'X-API-KEY': process.env.VUE_APP_KEY,
    },
    responseType: "json"
})
