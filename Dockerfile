FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN  yarn

COPY . .

RUN  yarn build

CMD  node ./lib/action.js