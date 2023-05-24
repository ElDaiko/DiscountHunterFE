import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Game = () => {

    const [game, setGame] = useState("");

    const getGame = async (gameID) => {
        const { data } = await axios.get(`http://localhost:8698/getIndividualGames/${gameID}`)
        
        setGame(data.individualGame)
    }

    useEffect(() => {
        getGame(258334)
    }, []);


    if(!game){
        return null
    }
    return (
        <Layout>
            <div>
                <h2>
                    {game.info.title}
                </h2>
            <Image loader={() => game.info.thumb}src={game.info.thumb} height={50} width={50} alt="Picture of the author"/>
                {game.deals.map((game) => (
                    <div key={game.storeImage}>{game.storeID}
                    <Image loader={() => game.storeImage}src={game.storeImage} height={50} width={50} alt="Picture of the author"/>
                    </div>
                    
                ))} 
            </div>
        </Layout>
    );
}

export default Game;
