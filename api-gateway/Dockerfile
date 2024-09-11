# Wähle ein Node.js-Image
FROM node:14

# Setze das Arbeitsverzeichnis
WORKDIR /usr/src/app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest der Anwendung
COPY . .

# Exponiere den Port für das API-Gateway
EXPOSE 3000

# Starte das API-Gateway
CMD ["node", "index.js"]
