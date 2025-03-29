import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

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
        setSidebarActive(false); // закриваємо при кліку на пункт
    };

    return (
        <>
            {/* Кнопка відкриття показується лише коли sidebar закритий */}
            {!sidebarActive && (
                <button
                    className={styles.menuButton}
                    onClick={() => setSidebarActive(true)}
                    aria-label="Відкрити меню"
                >
                    <AiOutlineMenu size={30} />
                </button>
            )}

            {/* Overlay для закриття */}
            {sidebarActive && (
                <div
                    className={styles.overlay}
                    onClick={() => setSidebarActive(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${sidebarActive ? styles.open : ''}`}>
                <nav>
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
        </>
    );
};

export default Navbar;
