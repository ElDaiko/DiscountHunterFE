import React from 'react';
import Layout from '../components/layout';
import GamePreview from '../components/gamePreview';
import styles from "../styles/wishlist.module.css"
import { useState } from 'react';

const Wishlist = () => {

    const [maxPrice, setMaxPrice] = useState("")
    const [minDisc, setMinDisc] = useState("")
    const results = 9

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(maxPrice, minDisc);
    }

    return (
        <Layout>
        <hr/>
        <div className={`row rows`}>
            <h2 className={`col-2 ${styles.text}`}><u>Filter:</u></h2>
            <form onSubmit={handleSubmit} className={`col-4 ${styles.text}`}>Max Price <input className='rounded' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}></input></form>
            <form onSubmit={handleSubmit} className={`col-4 ${styles.text}`}>Min Disc <input className='rounded' value={minDisc} onChange={(e) => setMinDisc(e.target.value)}></input></form>
        </div>
        <hr/>
        <div>
            <h4 className={`${styles.rfounde} ${styles.text}`}>
                {results} Results found
            </h4>
            <GamePreview/>
        </div>
        
        </Layout>
    );
}

export default Wishlist;
