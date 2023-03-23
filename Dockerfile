FROM node:19.8.1

WORKDIR /app

COPY package.json .

RUN npm i