FROM node:16.20.0
WORKDIR /youConcert/apps/auth
COPY package*.json ./
RUN npm install
COPY server.js ./
CMD ["yarn","start"]
