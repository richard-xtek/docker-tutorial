FROM node:6.11-alpine

WORKDIR "/opt"

RUN apk add --update git make g++ && \
    git clone https://github.com/richard-xtek/docker-tutorial.git

WORKDIR "/opt/docker-tutorial/example1"
RUN git checkout master
RUN npm install

ENV PORT=""

CMD npm run start

EXPOSE ${PORT}
