# 🌌 Treasure Planet – Інформаційний сайт гри

Це статичний промо-сайт, створений для мобільної гри **Treasure Planet**. Його основна мета — занурити гравця у космічний всесвіт гри ще до початку геймплею.

## 🧭 Що містить сайт

- 📘 Опис сюжету гри
- 🧑‍🚀 Інформація про головних персонажів
- 🖼️ Галерея скетчів та ілюстрацій
- 👕 Рекламний блок з мерчем
- 🛠️ Представлення команди розробників
- 🔒 Сторінки політики конфіденційності та умов використання

## ⚙️ Технології

- **React** – компонентна побудова, рендеринг через Virtual DOM
- **SCSS (Sass)** – модульні стилі з міксинами та змінними
- **Hooks**:
  - `useState` — керування станом компонента
  - `useEffect` — взаємодія з `localStorage`
  - `useRef` — реалізація свайпів у галереї
- **localStorage** — збереження останньої відкритої сторінки користувача

## 🧩 Основні компоненти

- `Navbar` — меню з адаптивним бургер-режимом
- `Gallery` — повноекранний перегляд із масштабуванням та навігацією
- `Characters` — вибір персонажів
- `Footer` — нижній колонтитул із навігацією
- `Merch`, `Avtors`, `About`, `Terms`, `Privacy` — окремі сторінки з відповідним вмістом

## 📱 Адаптивність

Сайт повністю оптимізований під:
- 📱 Мобільні пристрої (свайпи, бургер-меню)
- 💻 Планшети (адаптивне меню)
- 🖥️ Десктопи (мультиколоночний інтерфейс)

## 📦 Структура проєкту

📦 treasure-planet/
├── public/
│   ├── images/
│   │   ├── avtors/
│   │   ├── characters/
│   │   ├── sketch/
│   │   └── [інші зображення]
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt

├── src/
│   ├── components/
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.scss
│   │   └── navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.module.scss
│   ├── content/
│   │   ├── AboutText.json
│   │   ├── LicenseuseText.json
│   │   ├── MerchText.json
│   │   └── PrivacyText.json
│   ├── layout/
│   │   ├── Main.jsx
│   │   └── Main.module.scss
│   ├── pages/
│   │   ├── about/
│   │   │   ├── About.jsx
│   │   │   └── About.module.scss
│   │   ├── avtors/
│   │   │   ├── Avtors.jsx
│   │   │   └── Avtors.module.scss
│   │   ├── characters/
│   │   │   ├── Characters.jsx
│   │   │   └── Characters.module.scss
│   │   ├── gallery/
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.module.scss
│   │   ├── home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.scss
│   │   ├── merch/
│   │   │   ├── Merch.jsx
│   │   │   └── Merch.module.scss
│   │   └── policies/
│   │       ├── PrivacyPolicy/
│   │       │   ├── Privacy.jsx
│   │       │   └── Privacy.module.scss
│   │       ├── Terms/
│   │       │   ├── Terms.jsx
│   │       │   └── Terms.module.scss
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── index.js

├── .gitignore
├── README.md
├── package.json

# 🔧 Встановлення залежностей
````
yarn install
````
# 🚀 Запуск локального сервера для розробки
````
yarn dev
````
# 🏗️ Збірка проєкту для продакшену
````
yarn build
````
# 🔍 Перевірка типів або лінтинг (якщо налаштовано)
````
yarn lint
````
# 🧪 Запуск тестів (якщо є)
````
yarn test
````
# ⚙️ Попередній перегляд продакшен-версії
````
yarn preview
````