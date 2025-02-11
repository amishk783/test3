FROM node:20-alpine3.18 AS build

RUN addgroup app && adduser -S app -G app

USER app

RUN mkdir -p /home/app/frontend

WORKDIR /home/app/frontend

COPY --chown=app:app package*.json ./

RUN npm ci

COPY --chown=app:app . .

CMD ["npm","run","dev"]
