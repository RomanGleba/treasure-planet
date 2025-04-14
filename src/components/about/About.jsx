import React from 'react';
import styles from './About.module.scss';
import aboutText from '../../content/AboutText.json';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{aboutText.title}</h1>

            <div className={styles.card}>
                {aboutText.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <img src='/images/game.png' alt='game' className={styles.image} />
        </div>
    );
};


export default About;


