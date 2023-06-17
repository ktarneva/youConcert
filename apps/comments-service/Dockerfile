FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY src ./src/index.ts

CMD ["yarn", "dev"]
