FROM node:16.20.0
WORKDIR /youConcert/apps/auth
COPY package*.json ./
RUN yarn install
COPY index.js ./
CMD ["yarn","dev"]
