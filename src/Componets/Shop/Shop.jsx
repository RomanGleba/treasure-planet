import React from 'react';

const Shop = () => {
    return (
        <div style={styles.container}>
            <h2>Магазин</h2>
            <p>Купуйте найкращі бонуси для вашої гри!</p>
            <ul>
                <li>🍬 1000 монет – $2.99</li>
                <li>🍭 5 життів – $1.99</li>
                <li>💎 Унікальні бустери – $4.99</li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        background: '#ffcccb',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        maxWidth: '600px',
        margin: '20px auto',
    }
};

export default Shop;
