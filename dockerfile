FROM node:alpine

RUN npm install -g pnpm

RUN mkdir -p /monatize/layer1/
ENV PORT 3000

WORKDIR /monatize/layer1

COPY package.json /monatize/layer1/
COPY pnpm-lock.yaml /monatize/layer1/

RUN pnpm install

COPY . /monatize/layer1/

RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
