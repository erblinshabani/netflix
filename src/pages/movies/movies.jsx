import '../../styles/movies.css'
import { MovieHeader } from "./movies-header"
import { MoviesBody } from './movies-body/movies-body'

export const Movies = () => {

    return (
        <div className='movies'>
            <MovieHeader />
            <MoviesBody />
        </div>
    )
}