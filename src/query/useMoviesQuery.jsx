import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { movies } from "./movies-list"

const url = 'https://www.omdbapi.com/?apikey=753af46a&s=movie&type=movie&page='

const fetchMovies = () => {
    return axios.get(url + '10').then(res => res?.data?.Search)
}

const fetch40Movies = async () => {
    const fetchMoviesFirstPage = await axios.get(url + '3').then(res => res.data?.Search)
    const fetchMoviesFourthPage = await axios.get(url + '4').then(res => res.data?.Search)
    const fetchMoviesFifthPage = await axios.get(url + '5').then(res => res.data?.Search)
    const fetchMoviesSecondPage = await axios.get(url + '1').then(res => res.data?.Search)

    return [...fetchMoviesSecondPage, ...fetchMoviesFirstPage, ...fetchMoviesFourthPage, ...fetchMoviesFifthPage]
}

const allMovies = async () => {
    const fetchFirstMovies = await axios.get(url + '10').then(res => res.data.Search)
    const fetchMoviesFirstPage = await axios.get(url + '3').then(res => res.data?.Search)
    const fetchMoviesFourthPage = await axios.get(url + '4').then(res => res.data?.Search)
    const fetchMoviesFifthPage = await axios.get(url + '5').then(res => res.data?.Search)
    const fetchMoviesSecondPage = await axios.get(url + '1').then(res => res.data?.Search)

    return [...fetchFirstMovies, ...fetchMoviesFirstPage, ...fetchMoviesFourthPage, ...fetchMoviesFifthPage, ...fetchMoviesSecondPage, ...movies]
}


export const useMovieQuery = () => {
    return useQuery(['movies'], fetchMovies)
}

export const use40MovieQuery = () => {
    return useQuery(['movies40'], fetch40Movies)
}

export const useAllMoviesQuery = () => {
    return useQuery(['allMovies'], allMovies)
}