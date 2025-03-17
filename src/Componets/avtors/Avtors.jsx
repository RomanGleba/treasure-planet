import React from 'react';
import styles from './Avtors.module.css';



const Avtors = () => {







    return (
        <div className={styles.container}>

           <h1 className={styles.textStyle}> Автори  </h1>

            <img src='/images/avtors/katerina.png' alt='Katerina' className={styles.imgmoveleft} />

            <img src='/images/avtors/valentina.png' alt='Valentina' className={styles.imageup} />

            <img src='/images/avtors/volodymyr.png' alt='volodymyr' className={styles.imageupdouble} />

            <img src='/images/avtors/oleksiy.png' alt='Oleksiy' className={styles.imagetreble} />

            <img src='/images/avtors/roma.png' alt='Roma' className={styles.imagecustom} />
        </div>
    )
}



export default Avtors;