FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN  yarn

COPY . .

RUN  yarn build

# CMD  node /app/lib/action.js

ENTRYPOINT [ "node", "/app/lib/action.js" ]