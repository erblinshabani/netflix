import { useNavigate } from "react-router-dom"

export const MovieCard = ({movies}) => {
    const navigate = useNavigate(null)
    return (
        <>
            {movies && movies.map((movie, key) => {
                return (
                    <div key={key} className="movie-card" onClick={() => navigate(`/movie/${movie.imdbID}`)} style={{ background: `url('${movie?.Poster}')` }}>
                        <div className="movie-card-text">
                            <h3 className="movie-card-title">{movie?.Title}</h3>
                            <div className="movie-card-info">
                                <h5 style={{ padding: "0 10px" }}>The production year of this movie is {movie?.Year}</h5>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}