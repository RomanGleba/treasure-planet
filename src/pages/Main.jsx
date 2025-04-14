import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import styles from './Main.module.scss';
import About from "../componets/about/About";
import Gallery from "../componets/gallery/Gallery";
import Avtors from "../componets/avtors/Avtors";
import Home from "../componets/home/Home";
import Characters from "../componets/characters/Characters";
import Merch from "../componets/merch/Merch";
import Terms from "../componets/policies/terms/Terms";
import Footer from "../componets/footer/Footer";
import Privacy from "../componets/policies/privacypolicy/Privacy";


const Main = () => {
    const [currentPage, setCurrentPage] = useState(() => {
        return parseInt(localStorage.getItem("currentPage")) || 0;
    });

    useEffect(() => {
        localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    return (
        <div className={styles.main}>
            <Navbar setCurrentPage={setCurrentPage} />

            <main style={{ flex: 1 }}>
                {currentPage === 0 && (
                    <>
                        <Home />
                        <div/>

                    </>
                )}

                {currentPage === 1 && <About />}
                {currentPage === 2 && <Gallery />}
                {currentPage === 3 && <Characters />}
                {currentPage === 4 && <Avtors />}
                {currentPage === 5 && <Merch />}
                {currentPage === 6 && <Terms setCurrentPage={setCurrentPage} />}
                {currentPage === 7 && <Privacy setCurrentPage={setCurrentPage} />}
            </main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Main;
