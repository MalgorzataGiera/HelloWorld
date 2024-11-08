# Dockerfile dla backendu - Node.js
FROM node:latest

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki aplikacji
COPY package.json ./
COPY . .

# Instalacja zależności
RUN npm install

# Eksponuj port 3000
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "start"]

