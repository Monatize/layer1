FROM node:alpine

RUN npm install -g pnpm

RUN mkdir -p /dashboard
ENV PORT 3000

WORKDIR /dashboard/

COPY package.json /dashboard/
COPY pnpm-lock.yaml /dashboard/

RUN pnpm install

COPY . /dashboard/

RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]