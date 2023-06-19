FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN yarn install 

COPY src ./src/index.js

CMD ["yarn", "dev"]
