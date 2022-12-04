FROM "node:16-buster-slim"

COPY init.sh .

RUN init.sh

COPY . .

RUN npm install

EXPOSE 8080/tcp

RUN npm start
