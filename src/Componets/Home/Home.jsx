import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.hero}>
            <h2>Солодка пригода чекає!</h2>
            <p>Пориньте у яскравий світ головоломок, з'єднуйте цукерки та вигравайте!</p>
            <img src="https://via.placeholder.com/800x400/ff69b4/ffffff?text=Candy+Crush" alt="Candy Crush" />
        </section>
    );
};

export default Home;
