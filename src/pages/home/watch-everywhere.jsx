import Phone from '../../assets/device-pile.png';
import 'aos/dist/aos.css'

export const WatchEverywhere = () => {
    return (
        <div className="watch-everywhere">
            <div className="watch-everywhere-text" data-aos="fade-right" data-aos-duration="1000">
                <h2>Watch everywhere.</h2>
                <p>
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                </p>
            </div>
            
            <div className='watch-everywhere-img'  data-aos="fade-down" data-aos-duration="1300">
                <img src={Phone} alt="phone"/>
            </div>
        </div>
    )
}