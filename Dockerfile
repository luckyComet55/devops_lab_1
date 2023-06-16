FROM node:16 AS base
ARG PORT=3000
ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
EXPOSE ${PORT}
WORKDIR ${APP_DIR}

COPY package*.json tsconfig.json ./
RUN npm ci

FROM base
COPY src ./src
RUN npm run build && rm -r src

CMD npm run start