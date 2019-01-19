FROM node:10

WORKDIR "/app"

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=""
ENV CONTENT=""

CMD npm run start

EXPOSE 4000