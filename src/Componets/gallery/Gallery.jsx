import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.textitem}>Галерея</h1>
            <img src='/images/game.png' alt='game'/>

        </div>
    );
};

export default Gallery;


