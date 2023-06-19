FROM node:16.20.0
WORKDIR /youConcert/apps/auth
COPY package*.json ./
RUN yarn install
COPY src ./src/index.ts 
CMD ["yarn","dev"]
