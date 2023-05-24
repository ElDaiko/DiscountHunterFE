import Layout from "../components/layout"
import styles from "../styles/hunts.module.css"
import GamePreview from "../components/gamePreview";
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image";

const Hunts = () => {

    const [searchGame, setSearchGame] = useState([]);

    const search = async (title) => {

        if(!title){
            baseSearch()
            return
        }

        const { data } = await axios.get(`http://localhost:8698/getSearchGames/${title}`)
        setSearchGame(data.SearchGames)
    }

    const baseSearch = async () => {
        const { data } = await axios.get('http://localhost:8698/getRecentDeals')
        setSearchGame(data.RecentDeals.slice(0, 10))
    }

    useEffect(() => {
        baseSearch()
    }, []);

    return (
        <Layout>
            <input onKeyDown={(e) => {e.key == "Enter" ? search(e.target.value) : null}} className={`form-control me-sm-2 ${styles.nav}`} type="search" placeholder="Search" />
            {searchGame.map((game) => (
                <div key={game.gameID} className={`row rows ${styles.rows}`}>
                    <Image className='col-4' loader={() => game.thumb} src={game.thumb} height={50} width={50} alt="Picture of the author" />
                    <div className={`col-5 ${styles.price}`}>{game.title ? game.title : game.external}</div>
                </div>
            ))}
        </Layout>
    );
}

export default Hunts;
