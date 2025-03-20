import React from 'react';
import styles from './Avtors.module.css';



const Avtors = () => {







    return (
        <div className={styles.container}>

           <h1 className={styles.textStyle}> Автори  </h1>

            <img src='/images/avtors/katerina.png' alt='Katerina' className={styles.authorKaterina} />

            <img src='/images/avtors/valentina.png' alt='Valentina' className={styles.authorImageValentina} />

            <img src='/images/avtors/volodymyr.png' alt='volodymyr' className={styles.authorImageVolodymyr} />

            <img src='/images/avtors/oleksiy.png' alt='Oleksiy' className={styles.authorImageOleksiy} />

            <img src='/images/avtors/roma.png' alt='Roma' className={styles.authorImageRoma} />
        </div>
    )
}



export default Avtors;