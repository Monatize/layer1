FROM node:alpine

RUN npm install -g pnpm

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY pnpm-lock.yaml /usr/src/app/

RUN pnpm install --production

COPY . /usr/src/app/

RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]