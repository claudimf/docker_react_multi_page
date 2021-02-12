FROM node:15.0.1
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
RUN npm config set unsafe-perm true

COPY . /app

EXPOSE 3000