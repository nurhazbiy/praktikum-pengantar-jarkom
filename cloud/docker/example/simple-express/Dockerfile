FROM node:latest

ADD ./ /server

WORKDIR /server

RUN npm install -g pm2

EXPOSE 3000

CMD pm2 start app.js --no-daemon

