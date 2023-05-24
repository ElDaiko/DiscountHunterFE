import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import {useRouter} from "next/navigation"

const ImageGame = ({ game }) => {

    const {push} = useRouter()
    const [error, setError] = useState(false);

    const handleImageError = (event) => {
        if (!error) {
            setError(true)
        }
    }

    const handleOnClick = () => {
        push(`/game/${game.gameID}`)
    }


    return (
        <div onClick={ () => handleOnClick()}>
        {!error ? <Image loader={() =>
                `https://steamcdn-a.akamaihd.net/steam/apps/${game.steamAppID}/library_hero.jpg`}
                src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.steamAppID}/library_hero.jpg`} height={300} width={50} alt="Picture of the author"
                onError={handleImageError} /> : <Image loader={() =>
                    `https://cdn.cloudflare.steamstatic.com/steam/subs/${game.steamAppID}/capsule_sm_120.jpg?t=1606759785`}
                    src={`https://cdn.cloudflare.steamstatic.com/steam/subs/${game.steamAppID}/capsule_sm_120.jpg?t=1606759785`} height={300} width={50} alt="Picture of the author"
            />}
        </div>
        
    );
}

export default ImageGame