FROM node:16.18.0 AS build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build


