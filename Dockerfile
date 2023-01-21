FROM node:16.15.0-alpine as build
WORKDIR /app

COPY . /app/

RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["npm run", "start"]
