import React from 'react';
import Layout from '../components/layout';
import GamePreview from '../components/gamePreview';
import styles from "../styles/wishlist.module.css"
import { useState, useEffect } from 'react';
import axios from "axios"

const Wishlist = () => {

    const [maxPrice, setMaxPrice] = useState(10000000)
    const [minDisc, setMinDisc] = useState(0)
    const [listWish, setListWish] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(maxPrice, minDisc);
    }

    const getWishlist = async(max, min) => {
        const storedToken = localStorage.getItem("token")
        const {data} = await axios.get(`http://localhost:8698/getWishlist?max=${max}?min=${min}`, {headers:{Authorization:`Bearer ${storedToken}`}})
        setListWish(data.WishlistGames)
    }

    useEffect(() => {
        getWishlist(maxPrice, minDisc)
    }, []); 

    return (
        <Layout>
        <hr/>
        <div className={`row rows`}>
            <h2 className={`col-2 ${styles.text}`}><u>Filter:</u></h2>
            <form onSubmit={handleSubmit}>
                <input className={`col-4 rounded ${styles.text}`} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
                <input className={`col-4 rounded ${styles.text}`} value={maxPrice} onChange={(e) => setMinDisc(e.target.value)}/>
                <button className='col-2'>Search</button>
            </form>  
        </div>
        <hr/>
        <div>
            <h4 className={`${styles.rfounde} ${styles.text}`}>
                {listWish.length} Results found
            </h4>
            {!listWish[0] ? <>No added games</> :listWish.map((game) => (
                <div key={game.info.gameId}>
                    <GamePreview image={game.info.thumb} title={game.info.title} price={game.info.deal.price} id={game.info.gameId}/>
                </div>
                
            ))}
        </div>
        
        </Layout>
    );
}

export default Wishlist;
