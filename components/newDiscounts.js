import { useEffect, useState } from "react"
import styles from "../styles/discountSection.module.css"
import GamePreview from "./gamePreview"
import axios from "axios"

const NewDiscount = () => {

    const [newGame, setNewGame] = useState([])

    const newDeal = async () => {
        const { data } = await axios.get('http://localhost:8698/getRecentDeals')
        setNewGame(data.RecentDeals.slice(0, 10))
    }

    useEffect(() => {
        newDeal()
    }, []);

    return (
        <div className={`col-12 col-lg-3`}>
            <h2 className={styles.discountTitle}>New Discounts</h2>
            <div className={styles.discountDiv}>
                {newGame.map((game) => (
                    <div key={game.gameID}>
                        <GamePreview image={game.thumb} title={game.title} price={game.salePrice} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewDiscount