import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Контакти</h2>
            <p className={styles.description}>
                Зв'яжіться з нами за наступними контактами:
            </p>
            <ul className={styles.contactList}>
                <li className={styles.contactItem}>📧 Email: support@candycrush.com</li>
                <li className={styles.contactItem}>📞 Телефон: +380 50 123 45 67</li>
                <li className={styles.contactItem}>📍 Адреса: вул. Ігрова, 10, Київ</li>
            </ul>
        </div>
    );
};

export default Contacts;


