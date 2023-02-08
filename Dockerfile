FROM node:16.18.0 AS build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:stable-alpine AS deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
CMD ["nginx", "-g", "daemon off;"]

