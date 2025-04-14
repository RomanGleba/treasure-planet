import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import styles from './Main.module.scss';
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import Avtors from "../components/avtors/Avtors";
import Home from "../components/home/Home";
import Characters from "../components/characters/Characters";
import Merch from "../components/merch/Merch";
import Terms from "../components/policies/terms/Terms";
import Footer from "../components/footer/Footer";
import Privacy from "../components/policies/privacypolicy/Privacy";


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
