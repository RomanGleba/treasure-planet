import React, { useState } from 'react';
import styles from './Characters.module.scss';

const characters = [
    {
        id: 1,
        image: "/images/bruno_full.png",
        avatar: "/images/bruno.png",

    },
    {
        id: 2,
        image: "/images/kserfia_full.png",
        avatar: "/images/kserfia.png",

    },
    {
        id: 3,
        image: "/images/lumus_full.png",
        avatar: "/images/lumus.png",

    }
];

const Characters = () => {
    const [activeCharacter, setActiveCharacter] = useState(characters[0]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Персонажі</h1>

            {/* Аватарки персонажів */}
            <div className={styles.avatars}>
                {characters.map((character) => (
                    <img
                        key={character.id}
                        src={character.avatar}
                        alt={character.name}
                        className={`${styles.avatar} ${activeCharacter.id === character.id ? styles.active : ''}`}
                        onClick={() => setActiveCharacter(character)}
                    />
                ))}
            </div>

            {/* Основний блок персонажа */}
            <div className={styles.characterBox}>
                {/* Зображення персонажа */}
                <div className={styles.imageContainer}>
                    <img src={activeCharacter.image} alt={activeCharacter.name} className={styles.characterImage} />
                </div>

                {/* Опис персонажа */}
                <div>
                    <h2>{activeCharacter.name}</h2>
                    <p>{activeCharacter.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Characters;
