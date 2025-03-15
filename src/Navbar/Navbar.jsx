import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.frame3}>
                    <NavLink
                        to="/home"
                        end
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        Головна
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        Про гру
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        Галерея
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
