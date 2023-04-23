import { createContext } from 'react'
import Awake from '../assets/movies/awake.jpg'
import BadTrip from '../assets/movies/bad-trip.jpg'
import LaCasaDePapel from '../assets/movies/la-casa-de-papel.jpg'
import Benji from '../assets/movies/family-movies-on-netflix-benji.jpeg'
import DontLookUp from "../assets/movies/Don't-look-up.jpg"
import Jumanji from '../assets/movies/jumanji.jpg'
import WorldWarZ from '../assets/movies/WorldWarZ.jpeg'
import UnderTheShadow from '../assets/movies/Under-The-Shadow.jpeg'
import WeReTheMillers from '../assets/movies/we-re-the-millers.jpg'

export const AppContext = createContext()


export const movies = [
    {Poster: Awake, Title: 'Awake', Type: "Movie", Year: '2021', imdbID: 'awake2021'},
    {Poster: BadTrip, Title: 'Bad Trip', Type: "Movie", Year: '2021', imdbID: 'badtrip'},
    {Poster: LaCasaDePapel, Title: 'LaCasaDePapel', Type: "Movie", Year: '2021', imdbID: 'lacasadepapel'},
    {Poster: Benji, Title: 'Benji', Type: "Movie", Year: '2021', imdbID: 'benji'},
    {Poster: DontLookUp, Title: "Don't Look Up", Type: "Movie", Year: '2021', imdbID: 'dontlookup'},
    {Poster: Jumanji, Title: "Jumanji", Type: "Movie", Year: '2021', imdbID: 'jumanji'},
    {Poster: WorldWarZ, Title: "WorldWarZ", Type: "Movie", Year: '2021', imdbID: 'worldwarZ'},
    {Poster: UnderTheShadow, Title: "UnderTheShadow", Type: "Movie", Year: '2021', imdbID: 'underTheShadow'},
    {Poster: WeReTheMillers, Title: "WeReTheMillers", Type: "Movie", Year: '2021', imdbID: 'WeReTheMillers'},
]

export const MoviesList = ({children}) => {
    return <AppContext.Provider value={{ movies }}>{children}</AppContext.Provider>    
}
