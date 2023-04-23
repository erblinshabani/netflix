import '../../styles/home.css'
import { HomeHeader } from "./home-header";
import { TV } from "./tv";
import { WatchShowsOffline } from "./watch-shows-offilne";
import { AskedQuestions } from "./asked-questions";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { WatchEverywhere } from './watch-everywhere';


export const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <div className="home">
            <HomeHeader />
            <TV/>
            <WatchShowsOffline />
            <WatchEverywhere />
            <AskedQuestions />
        </div>
    )
}