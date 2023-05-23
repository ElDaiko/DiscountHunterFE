import React from 'react';
import styles from "../styles/hunts.module.css"

const GamePreview = () => {
    return (
        <div className={`row rows ${styles.rows}`}>
            <div className={`col-3 ${styles.img}`}>IMG</div>
            <div className={`col-5 ${styles.price}`}>Desc</div>
            <div className={`col-1 ${styles.store}`}>shop</div>
        </div>
    );
}

export default GamePreview;
