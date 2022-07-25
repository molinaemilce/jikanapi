import axios from "axios";

//creamos nuestro singleton

export const apiAnimeTop  = axios.create({
    baseURL : 'https://api.jikan.moe/v4/top/anime'
})
export const apiPopular  = axios.create({
    baseURL : 'https://api.jikan.moe/v4/watch/promos/popular'
})
export const apiRandom  = axios.create({
    baseURL : 'https://api.jikan.moe/v4/random/anime'
})
export const apiAllAnime = axios.create({
    baseURL : 'https://api.jikan.moe/v4/anime'
})
export const apiDetailID = axios.create({
    baseURL : 'https://api.jikan.moe/v4/anime/'
})
export const apiTopManga= axios.create({
    baseURL : 'https://api.jikan.moe/v4/top/manga'
})

export const apiGeneros= axios.create({
    baseURL : 'https://api.jikan.moe/v4/genres/anime'
})
export const apiRecom= axios.create({
    baseURL : 'https://api.jikan.moe/v4/recommendations/anime'
})
