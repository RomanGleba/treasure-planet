import React from 'react';
import styles from './merch.module.scss';
import merchText from '../../content/MerchText.json';

const Merch = () => {
    // Функція для переходу на сайт GameBuy
    const handleBuyClick = () => {
        window.location.href = merchText.buyUrl;
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{merchText.title}</h1>

            <div className={styles.merchBox}>
                {/* Зображення мерчу */}
                <div className={styles.imageContainer}>
                    <img src='/images/merch.png' alt='Merch' className={styles.merchImage} />
                </div>

                {/* Текстовий блок */}
                <div className={styles.textContainer}>
                    {merchText.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    {/* Кнопка з перенаправленням */}
                    <button className={styles.buyButton} onClick={handleBuyClick}>
                        {merchText.buyButton}
                    </button>

                    <p className={styles.footerText}>
                        {merchText.buyRedirectMessage}{" "}
                        <a href={merchText.buyUrl} target="_blank" rel="noopener noreferrer">
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Merch;


