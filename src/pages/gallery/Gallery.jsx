import React, { useState, useRef, useEffect } from "react";
import styles from "./Gallery.module.scss";

const images = [
    { src: "/images/sketch/sketch_bruno.png", caption: "Ескіз героя" },
    { src: "/images/sketch/sketch_bruno2.png", caption: "Фінальний вигляд героя" },
    { src: "/images/sketch/hammer.png", caption: "Інструмент гравця — молот" },
    { src: "/images/sketch/map.png", caption: "Карта рівнів гри" },
    { src: "/images/sketch/wheel-of-for-tune.png", caption: "Інтерфейс колеса фортуни" },
    { src: "/images/sketch/sketch_level.png", caption: "Ескіз рівня" },
    { src: "/images/sketch/treasure.png", caption: "Ескіз скарби" },
    { src: "/images/sketch/gamesketch.png", caption: "Ескіз скарби" },
    { src: "/images/sketch/iconfriends.png", caption: "Іконка друзі" },
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const touchStartX = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
    const handleClose = () => {
        setSelectedIndex(null);
        setZoom(1);
    };

    const handleNext = () => {
        setSelectedIndex(prev => (prev + 1) % images.length);
        setZoom(1);
    };

    const handlePrev = () => {
        setSelectedIndex(prev => (prev - 1 + images.length) % images.length);
        setZoom(1);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;

        if (deltaX > 50) handleNext();
        if (deltaX < -50) handlePrev();
    };

    return (
        <div className={styles.container}>
            {selectedIndex !== null ? (
                <div
                    className={styles.fullscreen}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button className={styles.BackButton} onClick={handleClose}>←</button>
                    <div className={styles.zoomControls}>
                        <button onClick={handleZoomOut}>➖</button>
                        <button onClick={handleZoomIn}>➕</button>
                    </div>

                    {isMobile ? (
                        <>
                            <div className={styles.navMobileContainer}>
                                <button onClick={handlePrev}>←</button>
                                <button onClick={handleNext}>→</button>
                            </div>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={images[selectedIndex].src}
                                    alt="full"
                                    className={styles.fullImage}
                                    style={{ transform: `scale(${zoom})` }}
                                />
                            </div>
                        </>
                    ) : (
                        <div className={styles.imageWrapper}>
                            <button className={styles.navLeft} onClick={handlePrev}>←</button>
                            <img
                                src={images[selectedIndex].src}
                                alt="full"
                                className={styles.fullImage}
                                style={{ transform: `scale(${zoom})` }}
                            />
                            <button className={styles.navRight} onClick={handleNext}>→</button>
                        </div>
                    )}

                    {images[selectedIndex].caption && (
                        <p className={styles.caption}>{images[selectedIndex].caption}</p>
                    )}
                </div>
            ) : (
                <>
                    <h1 className={styles.textitem}>Галерея</h1>
                    <p className={styles.description}>
                        Тут можна побачити, як створювався наш проєкт — від ескізів до реалізації. Дизайнери, розробник, і адміністратори залишили тут свій слід.
                    </p>

                    <div className={styles.grid}>
                        {images.map((item, index) => (
                            <div key={index} className={styles.imageCard}>
                                <img
                                    src={item.src}
                                    alt={`concept-${index}`}
                                    onClick={() => setSelectedIndex(index)}
                                />
                                {item.caption && (
                                    <p className={styles.caption}>{item.caption}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Gallery;

