FROM node:15.0.1

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install -g --unsafe-perm=true --allow-root

COPY . /app

EXPOSE 3000