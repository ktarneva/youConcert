FROM node:16.20.0
WORKDIR /youConcert/apps/recommendations
COPY package*.json ./
RUN yarn install
COPY src/index.ts ./
CMD ["yarn","dev"]