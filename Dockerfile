FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 5001

CMD ["npm", "start"]