import React, { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = ({ setCurrentPage }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sidebarActive, setSidebarActive] = useState(false);

    const menuItems = [
        { label: 'Головна', index: 0 },
        { label: 'Про гру', index: 1 },
        { label: 'Галерея', index: 2 },
        { label: 'Персонажі', index: 3 },
        { label: 'Автори', index: 4 },
        { label: 'Мерч', index: 5 },
    ];

    const handleClick = (index) => {
        setCurrentPage(index);
        setActiveIndex(index);
        setSidebarActive(false); // Закриваємо після кліку
    };

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* кнопка відкриття/закриття sidebar */}
                <button
                    className={`${styles.menuButton} ${sidebarActive ? styles.openButton : ''}`}
                    onClick={toggleSidebar}
                    aria-label="Меню"
                >
                    <span></span>
                </button>

                {/* inline navbar тільки для десктопу */}
                <nav className={styles.frame3} aria-label="Main navigation">
                    {menuItems.map((item) => (
                        <button
                            key={item.index}
                            onClick={() => handleClick(item.index)}
                            className={activeIndex === item.index ? styles.active : ''}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${sidebarActive ? styles.open : ''}`}>
                {menuItems.map((item) => (
                    <button
                        key={item.index}
                        onClick={() => handleClick(item.index)}
                        className={activeIndex === item.index ? styles.active : ''}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Navbar;
