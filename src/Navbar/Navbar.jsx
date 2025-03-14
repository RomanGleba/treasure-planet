import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <h1>Candy Crush</h1>
                <nav>
                    <NavLink to="/home" end className={({ isActive }) => (isActive ? styles.active : '')}>
                        Головна
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Про нас
                    </NavLink>
                    <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Контакти
                    </NavLink>
                    <NavLink to="/shop" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Магазин
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;