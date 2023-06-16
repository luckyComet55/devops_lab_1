FROM node:16-alpine AS base
ARG PORT=3000
ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package*.json tsconfig.json ./
RUN npm ci
COPY ./src ./src
RUN npm run build

FROM node:16-alpine
ARG APP_DIR=app
WORKDIR ${APP_DIR}
COPY package*.json ./
RUN npm ci
COPY --from=base /${APP_DIR}/dist ./dist
EXPOSE ${PORT}
CMD npm run start