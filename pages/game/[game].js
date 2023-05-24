import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import { useState } from 'react';
import Image from 'next/image';
import axios, { Axios } from 'axios';
import styles from "../../styles/game.module.css";
import { useRouter } from 'next/router';

const Game = () => {

    const [game, setGame] = useState("")
    const [token, setToken] = useState("")

    const router = useRouter()
    const param = router.query.game


    const getGame = async () => {
        const { data } = await axios.get(`http://localhost:8698/getIndividualGames/${param}`)
        setGame(data.individualGame)
    }

    console.log(token);

    const addWhislist = async (param) => {
        const wishlist = await getWishlist()

       let added = false

        wishlist.WishlistGames.map((game) => {
            if(game.info.gameId == param ){
                deleteWishlist(game.info.id)
                added = true
                return
            }
        })

        if(!added){
            const { data } = await axios({
                method : "post",
                url : "http://localhost:8698/addToWishlist",
                headers : 
                {Authorization: `Bearer ${token}`},
                data : {gameId:param}
            })
            console.log(param);
            await axios.post("http://localhost:8698/setPopularGames", {gameId:param} ) 
        }
        
    }

    const getWishlist = async() => {
        const {data} = await axios.get("http://localhost:8698/getWishlist", {headers:{Authorization:`Bearer ${token}`}})
        return data
    }

    const deleteWishlist = async (id) => {
        console.log(id);
        const {data} = await axios.delete(`http://localhost:8698/deleteWishlist/${id}`, {headers:{Authorization:`Bearer ${token}`}})
    }


    useEffect(() => {
        if (param) {
            getGame(param)
            const storedToken = localStorage.getItem("token")
            setToken(storedToken)
        }
    }, [param]);

    if (!game) {
        return null
    }
    return (
        <Layout>
            <div className={`row col-6 ${styles.bgColor}`}>
                <Image className='col-2' loader={() => game.info.thumb} src={game.info.thumb} height={50} width={50} alt="Picture of the author" />
                <h2 className='col-2'>
                    {game.info.title}
                </h2>
                {token ? <button onClick={() => addWhislist(param)}>❤</button> : <></>}
                <div className='col-1'>
                    {game.deals.map((game) => (
                        <div key={game.storeImage}>
                            <Image loader={() => game.storeImage} src={game.storeImage} height={30} width={25} alt="Picture of the author" />
                        </div>
                    ))}
                </div>

            </div>
        </Layout>
    );
}

export default Game;