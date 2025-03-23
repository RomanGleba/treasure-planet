import React from 'react';
import privacyData from '../../../content/PrivacyText.json';
import styles from './Privacy.module.scss';

const Privacy = ({ setCurrentPage }) => {
    return (
        <div className={styles.privacyContainer}>
            <button className={styles.backButton} onClick={() => setCurrentPage(0)}>
                ← Назад
            </button>

            <h1>{privacyData.title}</h1>
            <p className={styles.date}>{privacyData.effectiveDate}</p>
            <p className={styles.intro}>{privacyData.intro}</p>

            {privacyData.sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h2>{section.title}</h2>
                    {section.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Privacy;
