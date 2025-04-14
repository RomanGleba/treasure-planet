import React, { useState } from "react";
import styles from "./Gallery.module.scss";

const images = [
    { src: "/images/sketch/sketch_bruno.png", caption: "Ескіз персонажа" },
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
    const [selectedImage, setSelectedImage] = useState(null);
    const [zoom, setZoom] = useState(1);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
    const handleClose = () => {
        setSelectedImage(null);
        setZoom(1);
    };

    return (
        <div className={styles.container}>
            {selectedImage ? (
                <div className={styles.fullscreen}>
                    <button className={styles.BackButton} onClick={handleClose}>←</button>
                    <div className={styles.zoomControls}>
                        <button onClick={handleZoomOut}>➖</button>
                        <button onClick={handleZoomIn}>➕</button>
                    </div>
                    <img
                        src={selectedImage}
                        alt="full"
                        className={styles.fullImage}
                        style={{ transform: `scale(${zoom})` }}
                    />
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
                                    onClick={() => setSelectedImage(item.src)}
                                />
                                {item.caption && <p className={styles.caption}>{item.caption}</p>}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Gallery;
