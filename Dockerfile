FROM node:12.18-stretch

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD npm start