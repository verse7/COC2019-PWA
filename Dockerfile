# build stage
FROM node:lts-alpine as build-stage
WORKDIR /
COPY package*.json ./
RUN npm install
RUN npm audit fix
COPY . .
RUN npm run build


# production stage
FROM nginx:stable-alpine as production
COPY --from=build-stage dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]