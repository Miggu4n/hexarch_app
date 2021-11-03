FROM node:lts

WORKDIR /usr/core

COPY package*.json ./

RUN npm i

COPY ./ ./

RUN npm run build

CMD ["npm", "start"]