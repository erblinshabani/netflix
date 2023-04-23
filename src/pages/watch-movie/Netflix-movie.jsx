import { Link, useParams } from "react-router-dom"
import { useAllMoviesQuery } from "../../query/useMoviesQuery"
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../../styles/watch-movie.css'

export const NetflixMovie = () => {
    const {movieId} = useParams()
    
    const {data} = useAllMoviesQuery()
    const d = data && data.find(did => did?.imdbID === movieId)

    useEffect(() => {
        Aos.init({delay: 500})
    }, [])

    return (
        <div className="netflix-movie" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500" style={{ background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('${d?.Poster}')` }}>
            <div className="netflix-movie-contain" data-aos="zoom-out" data-aos-delay={1700} data-aos-duration="1400">
                <img src={d?.Poster} alt={d?.Title} />
                <div className="netflix-movie-info" data-aos="zoom-out" data-aos-delay={2500} data-aos-duration="2000">
                    <h2>{d?.Title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate totam nihil a rerum sapiente incidunt quia explicabo unde, nemo laboriosam iste dolorem illum quas dolor quae fugiat ex iure.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate totam nihil a rerum sapiente incidunt quia explicabo unde, nemo laboriosam iste dolorem illum quas dolor quae fugiat ex iure.
                    </p>
                    <div className="b">
                        <Link className="netflix-movie-watch-tutorial" to={`https://www.youtube.com/results?search_query=${d?.Title} trailer`}>
                            Watch Trailer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}