import TVImg from '../../assets/tv-img.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const TV = () => {
    useEffect(() => {
        AOS.init({duration: 100})
    }, [])

    return (
        <div className="enjoy-on-tv" data-aos="fade-up">
            <div className="left-tv">
                <h1>Enjoy on your Tv</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>

            <div className="right-tv">
                <img src={TVImg} width="300px" alt="" />
            </div>
        </div>
    )
}