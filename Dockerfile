FROM node:20-alpine

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node tsconfig*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY --chown=node:node . .