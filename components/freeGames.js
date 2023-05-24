import styles from "../styles/cardGames.module.css"
import axios from "axios"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from "react";
import ImageGame from "./imageGame";
import Image from "next/image";


const FreeGames = () => {

    const [freeList, setFreeList] = useState([]);

    const free = async () => {
        const { data } = await axios.get('http://localhost:8698/getFreeGames')
        setFreeList(data.FreeGames)
        /* return data.steamAppID */
    }


    useEffect(() => {
        free()
    }, []);

    return (

        <div className={`col-12 col-lg-4 freeCard ${styles.freeCard}`}>
            <h2 className={styles.feturedTitle}>Free Games</h2>
            <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                {freeList.map((game) => (
                    <div key={game.gameID}>
                        <h3 className={`${styles.overText} ${styles.feturedTitle}`}>{game.title}</h3>
                            <h3 className={`${styles.topData} ${styles.overText} ${styles.feturedTitle} ${styles.priceMargin}`}><span className={styles.priceMargin}>{game.normalPrice}$</span></h3>
                        <Image loader={() =>
                            `${game.thumb}`}
                            src={`${game.thumb}`} height={300} width={50} alt="Picture of the author"
                        />
                    </div>))}
            </Carousel>
        </div>

    )

}

export default FreeGames