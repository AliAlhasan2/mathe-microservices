FROM node:14
LABEL authors="Alhasan"
WORKDIR add-service
COPY package*.json ./
RUN npm install
COPY  . .

EXPOSE 3003


CMD ["node", "index.js"]