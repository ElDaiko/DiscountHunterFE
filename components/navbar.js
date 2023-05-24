import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as jose from 'jose'
import axios from 'axios'
import styles from "../styles/navbar.module.css"

const Navigation = () => {
    const router = useRouter();
    const { pathname } = router;
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [searchGame, setSearchGame] = useState([])

    const navSearch = async (title) => {

        if (!title) {
            setSearchGame([])
            return
        }

        const { data } = await axios.get(`http://localhost:8698/getSearchGames/${title}`)
        setSearchGame(data.SearchGames.slice(0, 5))
    }


    useEffect(() => {
        const tokenFunction = async () => {
            if (typeof window !== 'undefined') {
                const storedToken = await localStorage.getItem("token")
                setToken(storedToken)
                const decoded = storedToken ? jose.decodeJwt(storedToken) : ""  // aqui se valida si se tiene el token
                setUser(decoded?.username)  //con el ? se indica que el objeto puede no existir
            }
        }
        tokenFunction()

    }, []);

    const logOut = () => {  // Limpiar el token para cerrar sesion
        localStorage.removeItem("token")
        setToken(null)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">DiscountHunter</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/hunts">Hunts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/wishlist">wishlist</Link>
                        </li>
                    </ul>
                    <div className="d-flex">

                        {!pathname.includes('/hunts') ? <><input onChange={(e) => navSearch(e.target.value)}
                            className={`form-control me-sm-2 ${styles.searchBar}`} type="search" placeholder="Search" />
                            {searchGame[0] &&  (<ul className={styles.listResults}>{searchGame.map((game) => (<li key={game.gameID}>{game.external}</li>))}</ul>)}</> : <></>
                        } 

                        {token ? <Link className="btn btn-secondary my-2 my-sm-0" href='/' onClick={() => logOut()}> LogOut </Link> : <Link className="btn btn-secondary my-2 my-sm-0" href="/login"> Login </Link>}
                        {user && <p>{user}</p>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;