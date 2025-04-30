# Вихідний образ з Node.js 23.11.0 (на базі Debian Bullseye)
FROM node:23.11.0-bullseye

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо файли залежностей
COPY package.json yarn.lock ./

# Встановлюємо залежності
RUN yarn install

# Копіюємо весь проєкт у контейнер
COPY . .

# Збираємо production build
RUN yarn build

# Встановлюємо легкий сервер для сервування build
RUN yarn global add serve

# Відкриваємо порт 3000
EXPOSE 3000

# Запускаємо додаток у production-режимі
CMD ["serve", "-s", "build", "-l", "3000"]
