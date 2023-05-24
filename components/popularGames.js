import { useEffect, useState } from "react"
import styles from "../styles/discountSection.module.css"
import GamePreview from "./gamePreview"
import axios from "axios"

const PopularGames = () => {

    const [popularGame, setPopularGame] = useState([])

    const popularDeal = async () => {
        const { data } = await axios.get('http://localhost:8698/getPopularGames')
        setPopularGame(data.popularGames.slice(0, 10))
    }

    useEffect(() => {
        popularDeal()
    }, []);

    return (
        <div className={`col-12 col-lg-4`}>
            <h2 className={styles.discountTitle}>Popular Games</h2>
            <div className={styles.discountDiv}>
                {popularGame.map((game) => (
                    
                    <div key={game.info.gameId}>
                        <GamePreview image={game.info.thumb} title={game.info.title} price={game.info.deal.price} id={game.info.gameId}/>
                        <p>{parseInt(game.info.deal.savings).toFixed(1)}%</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularGames