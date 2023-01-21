FROM node:16.15.0-alpine as build
WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 80
CMD ["npm", "start"]
