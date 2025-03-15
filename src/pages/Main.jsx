import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import styles from './Main.module.scss';
import About from "../Componets/About/About";
import Gallery from "../Componets/Gallery/Gallery";
import Avtors from "../Componets/Avtors/Avtors";
import Home from "../Componets/Home/Home";

const Main = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className={styles.main}>
            <Navbar setCurrentPage={setCurrentPage} />
            {currentPage === 0 && <Home />}
            {currentPage === 1 && <About />}
            {currentPage === 2 && <Gallery />}
            {currentPage === 3 && <Avtors />}
        </div>
    );
};

export default Main;
