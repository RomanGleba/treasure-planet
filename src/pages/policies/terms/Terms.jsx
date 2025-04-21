import React from 'react';
import termsData from '../../../content/LicenseduseText.json';
import styles from './Terms.module.scss';
import { AiOutlineArrowLeft } from "react-icons/ai";
const Terms = ({ setCurrentPage }) => {
    return (
        <div className={styles.privacyContainer}>
            <button className={styles.goBackButton} onClick={() => setCurrentPage(0)}>
                <AiOutlineArrowLeft />
            </button>

            <h1>{termsData.title}</h1>
            <p className={styles.termsDate}>{termsData.effectiveDate}</p>
            <p className={styles.termsIntro}>{termsData.intro}</p>

            {termsData.sections.map((section, index) => (
                <div key={index} className={styles.termsSection}>
                    <h2>{section.title}</h2>
                    {section.content.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Terms;
