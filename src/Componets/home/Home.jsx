import React from "react";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <img
                src="/images/text.png"
                className={styles.foto}
                alt="Treasure Planet Logo"
                loading="lazy"
            />
        </div>
    );
};

export default Home;
