import CountUp from "react-countup/build"
import { Link } from "react-router-dom"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"

export const HomeHeader = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <div className="header" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-duration="300"
            data-aos-offset="0">
            <div className="header-contains" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="1000"
                data-aos-offset="0">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h3>Plans now start at EUR4.99/month.</h3>
                <h3>Ready to watch? Enter your email to create or restart your membership..</h3>
                <Link className="go-to-login-btn" to='/login'>Start Now</Link>
            </div>
            <h4 className="subcribers-number">{<CountUp delay={1.5} duration={7} end={230}/>}M Subscribers</h4>
        </div>
    )
}