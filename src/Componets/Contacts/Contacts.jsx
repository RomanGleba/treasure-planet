import React from 'react';

const Contacts = () => {
    return (
        <div style={styles.container}>
            <h2>Контакти</h2>
            <p>Зв'яжіться з нами за наступними контактами:</p>
            <ul>
                <li>📧 Email: support@candycrush.com</li>
                <li>📞 Телефон: +380 50 123 45 67</li>
                <li>📍 Адреса: вул. Ігрова, 10, Київ</li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        background: '#ffe4e1',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        maxWidth: '600px',
        margin: '20px auto',
    }
};

export default Contacts;
