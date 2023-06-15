FROM node:16.20.0
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY src ./src

CMD ["yarn", "dev"]
