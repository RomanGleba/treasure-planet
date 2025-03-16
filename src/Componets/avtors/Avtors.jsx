import React from 'react';
import styles from './Avtors.module.css';



const Avtors = () => {







    return (
        <div className={styles.container}>

           <h1 className={styles.textStyle}> Автори  </h1>

            <img src='/Katerina.png' alt='Katerina' className={styles.imgmoveleft} />

            <img src='/Valentina.png' alt='Valentina' className={styles.imageup} />
        </div>
    )
}



export default Avtors;