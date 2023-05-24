import React from 'react';
import styles from "../styles/hunts.module.css"
import Image from "next/image"

const GamePreview = ({image, title, price}) => {

    return (
        <div className={`row rows ${styles.rows}`}>
            <Image className='col-4' loader={() => image}src={image} height={50} width={50} alt="Picture of the author"/>
            <div className={`col-5 ${styles.price}`}>{title}</div>
            <div className={`col-2 ${styles.store}`}>{price} $</div>
        </div>
    );
}

export default GamePreview;
