FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN yarn install

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=comments-service --docker

COPY src ./src/index.ts

CMD ["yarn", "dev"]
