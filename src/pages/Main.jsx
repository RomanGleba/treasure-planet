import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import styles from './Main.module.scss';
import About from "../Componets/About/About";
import Gallery from "../Componets/gallery/Gallery";
import Avtors from "../Componets/avtors/Avtors";
import Home from "../Componets/home/Home";
import Characters from "../Componets/сharacters/Characters";
import Merch from "../Componets/merch/Merch";
import Terms from "../Componets/conditions/terms/Terms";
import Footer from "../Componets/conditions/footer/Footer";
import Privacy from "../Componets/./conditions/privacypolicy/Privacy";
const Main = () => {
    // Отримуємо збережену вкладку з localStorage або ставимо значення за замовчуванням (0)
    const [currentPage, setCurrentPage] = useState(() => {
        return parseInt(localStorage.getItem("currentPage")) || 0;
    });

    // Зберігаємо поточну вкладку у localStorage при зміні стану
    useEffect(() => {
        localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    return (
        <div className={styles.main}>
            <Navbar setCurrentPage={setCurrentPage} />
            {currentPage === 0 && <Home />}
            {currentPage === 1 && <About />}
            {currentPage === 2 && <Gallery />}
            {currentPage === 3 && <Characters />}
            {currentPage === 4 && <Avtors />}
            {currentPage === 5 && <Merch />}
            {currentPage === 0 && <Footer setCurrentPage={setCurrentPage} />}
            {currentPage === 6 && <Terms setCurrentPage={setCurrentPage} />}
            {currentPage === 7 && <Privacy setCurrentPage={setCurrentPage} />}

        </div>
    );
};

export default Main;

