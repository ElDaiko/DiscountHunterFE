import { useEffect, useState } from "react"
import styles from "../styles/discountSection.module.css"
import GamePreview from "./gamePreview"
import axios from "axios"


const BestDiscounts = () => {
    
    const [bestGame, setBestGame] = useState([])

    const bestDeal = async () => {
        const { data } = await axios.get('http://localhost:8698/getBestDeals')
        setBestGame(data.BestDeals.slice(0, 10))
    }

    useEffect(() => {
        bestDeal()
    }, []);

    return (
        <div className={`col-12 col-lg-3`}>
            <h2 className={styles.discountTitle}>Best Discounts</h2>
            <div className={styles.discountDiv}>
                {bestGame.map((game) => (
                    <div key={game.gameID}>
                        <GamePreview image={game.thumb} title={game.title} price={game.salePrice} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestDiscounts