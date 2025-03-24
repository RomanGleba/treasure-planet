import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ setCurrentPage }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Колонка: Опис проєкту */}
                <div className={styles.column}>
                    <h2 className={styles.title}>Treasure Planet</h2>
                    <p>
                        Космічна пригода для справжніх мандрівників! Досліджуй планети, збирай команду і відкривай скарби галактики.
                    </p>
                    <div className={styles.legal}>
                        <button onClick={() => setCurrentPage(6)}>Умови використання</button>
                        <button onClick={() => setCurrentPage(7)}>Політика конфіденційності</button>
                    </div>
                </div>

                {/* Колонка: Навігація */}
                <div className={styles.column}>

                </div>

                {/* Колонка: Соціальні мережі */}
                <div className={styles.column}>


                </div>
            </div>

            <div className={styles.copy}>
                © 2025 Treasure Planet. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
