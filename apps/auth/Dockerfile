FROM node:12
WORKDIR /youConcert/apps/auth
COPY package*.json ./
RUN npm install
COPY server.js ./
CMD ["yarn","dev"]
