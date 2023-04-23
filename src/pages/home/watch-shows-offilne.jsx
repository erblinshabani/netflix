import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const WatchShowsOffline = () => {
    useEffect(() => {
        Aos.init({duration: 500})
    })
    
    return (
        <div className="watch-shows-offline">
            <div className="watch-shows-offline-contain" data-aos="zoom-in">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9LbubOehAPJfuGy0zYDRw0n5X6iF3XsLOCw&usqp=CAU" alt="" />
                <div className="watch-show-offline-text">
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>
            </div>
        </div>
    )
}