import React from 'react';
import privacyData from '../../../content/PrivacyText.json';
import styles from './Privacy.module.scss';
import { AiOutlineArrowLeft } from "react-icons/ai";

const Privacy = ({ setCurrentPage }) => {
    return (
        <div className={styles.privacyContainer}>
            <button className={styles.goBackButton} onClick={() => setCurrentPage(0)}>
                <AiOutlineArrowLeft />
            </button>

            <h1>{privacyData.title}</h1>
            <p className={styles.termsDate}>{privacyData.effectiveDate}</p>
            <p className={styles.termsIntro}>{privacyData.intro}</p>

            {privacyData.sections.map((section, index) => (
                <div key={index} className={styles.termsSection}>
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
