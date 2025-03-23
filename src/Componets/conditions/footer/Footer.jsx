import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ setCurrentPage }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>© 2025 Treasure Planet</p>
                <div className={styles.links}>
                    <button onClick={() => setCurrentPage(6)}>Умови використання</button>
                    <span>|</span>
                    <button onClick={() => setCurrentPage(7)}>Політика конфіденційності</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
