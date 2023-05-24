import styles from "../styles/cardGames.module.css"
import axios from "axios"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from "react";
import ImageGame from "./imageGame";
import {useRouter} from "next/navigation"

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
            <h2 className={styles.feturedTitle}>Featured Games</h2>
            <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                {featuredList.map((game) => (
                    <div key={game.gameID}>
                            <h3 className={`${styles.overText} ${styles.feturedTitle}`}>{game.title}</h3>
                            <h3 className={`${styles.topData} ${styles.overText} ${styles.feturedTitle}`}><span className={styles.lineT}>{game.normalPrice}$</span> {game.salePrice}$</h3>
                        <ImageGame game={game} />   
                    </div>))}

            </Carousel>
        </div>

    )

}

export default FeaturedGames 