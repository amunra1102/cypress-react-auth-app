FROM cypress/base:12

COPY . .

RUN ["npm", "install"]

RUN ["cd", "client"]

RUN ["npm", "install"]

RUN ["cd", ".."]

RUN ["npm", "install", "build:and:test"]
