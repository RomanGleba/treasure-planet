import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar/Navbar";
import styles from './Main.module.scss';
import About from "../pages/about/About";
import Gallery from "../pages/gallery/Gallery";
import Avtors from "../pages/avtors/Avtors";
import Home from "../pages/home/Home";
import Characters from "../pages/characters/Characters";
import Merch from "../pages/merch/Merch";
import Terms from "../pages/policies/terms/Terms";
import Footer from "../components/footer/Footer";
import Privacy from "../pages/policies/privacypolicy/Privacy";


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
