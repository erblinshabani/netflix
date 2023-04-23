import { use40MovieQuery, useMovieQuery } from "../../../query/useMoviesQuery"
import Marquee from 'react-fast-marquee'
import { MovieCard } from "./movies-card"

export const MoviesBody = () => {

    const {data:movies} = useMovieQuery()
    const {data:moviesTwo} = use40MovieQuery()

    return (
        <div className="movies-body">
            <div className="movies-body-contain">
                <h2>Popular Movies</h2>
                <Marquee className="first-movies-cards" pauseOnHover={true} speed={26} gradientWidth={50} gradientColor={[9,8,8]}>
                    <MovieCard movies={movies}/>
                </Marquee>
                <h2>Movies</h2>
                <div className="movies-cards">
                    <MovieCard movies={moviesTwo}/>
                </div>
            </div>
        </div>
    )
}