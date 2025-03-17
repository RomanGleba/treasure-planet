import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import styles from './Main.module.scss';
import About from "../Componets/About/About";
import Gallery from "../Componets/gallery/Gallery";
import Avtors from "../Componets/avtors/Avtors";
import Home from "../Componets/home/Home";
import Characters from "../Componets/сharacters/Characters";
import Merch from "../Componets/merch/Merch";

const Main = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className={styles.main}>
            <Navbar setCurrentPage={setCurrentPage} />
            {currentPage === 0 && <Home />}
            {currentPage === 1 && <About />}
            {currentPage === 2 && <Gallery />}
            {currentPage === 3 && <Characters />}
            {currentPage === 4 && <Avtors />}
            {currentPage === 5 && <Merch />}
        </div>
    );
};

export default Main;
