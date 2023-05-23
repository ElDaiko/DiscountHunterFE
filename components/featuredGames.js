import styles from "../styles/cardGames.module.css"
import axios from "axios"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from "react";
import ImageGame from "./imageGame";

const FeaturedGames = () => {

    const [featuredList, setFeaturedList] = useState([]);

    const featured = async () => {
        const { data } = await axios.get('http://localhost:8698/getOnSaleGames')
        setFeaturedList(data.onSaleGames.slice(0, 5))
        return data.steamAppID
    }


    useEffect(() => {
        featured()
    }, []);

    return (

        <div className={`col-12 col-lg-7 ${styles.featuredCard}`}>
            <h2 className={styles.feturedTitle}>FeaturedGames</h2>
            <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                {featuredList.map((game) => (

                    <div key={game.gameID}>
                        {console.log(game.steamAppID)}
                        <ImageGame game={game} />
                    </div>))}

            </Carousel>
        </div>

    )

}

export default FeaturedGames 