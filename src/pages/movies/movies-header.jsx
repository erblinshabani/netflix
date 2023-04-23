import { useContext, useLayoutEffect, useState } from "react"
import { AppContext } from "../../query/movies-list"
import { useNavigate } from "react-router-dom"

export const MovieHeader = () => {
    const {movies} = useContext(AppContext)
    const [moviesLength, setMoviesLength] = useState(0)

    const navigate = useNavigate(null)

    useLayoutEffect(() => {
        const n = Math.floor(Math.random() * movies.length)
        setMoviesLength(n >= 0 ? n : 0)
    }, [movies])
    return (
    <header className="movie-header" style={{ background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${movies[moviesLength]?.Poster}')` }}>
        <div className="movie-header-info">
            <h1 className="movie-header-title">{movies[moviesLength]?.Title}</h1>
            <div className="movie-header-info-btns">
                <button onClick={() => navigate(`/movie/${movies[moviesLength]?.imdbID}`)} className="movie-header-play-btn">Play</button>
                <button  className="movie-header-my-list-btn">My List</button>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis magnam debitis nulla incidunt tempora quam dolorem id, sunt, voluptatum molestias, omnis aliquid porro eligendi rem vitae quibusdam veniam! Asperiores, sit!</p>
        </div>
        <div className="fade-bottom"></div>
    </header>
    )
}