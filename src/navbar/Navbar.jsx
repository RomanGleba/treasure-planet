import React, { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = ({ setCurrentPage }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { label: 'Головна', index: 0 },
        { label: 'Про гру', index: 1 },
        { label: 'Галерея', index: 2 },
        { label: 'Персонажі', index: 3 },
        { label: 'Автори',  index: 4 },
        { label: 'Мерч',  index: 5 },
    ];

    const handleClick = (index) => {
        setCurrentPage(index);
        setActiveIndex(index);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.frame3}>
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
        </header>
    );
};

export default Navbar;