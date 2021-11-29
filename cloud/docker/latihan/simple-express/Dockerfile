FROM node

ADD ./ /server

WORKDIR /server

RUN npm install pm2 -g

RUN npm install

CMD pm2 start app.js --no-daemon

