FROM node:16.13.1-alpine3.14 as builder
RUN mkdir -p /home/node/app
WORKDIR /home/node
COPY app/ ./app
COPY index.ts .
COPY tsconfig.json .
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
RUN npm run build
RUN chown -R node:node ./build



FROM node:16.13.1-alpine3.14
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
USER node
WORKDIR /home/node
RUN apk add --no-cache tini
COPY ["package.json", "package-lock.json", "./"]
ENV NODE_ENV production
RUN npm ci --production
COPY --from=builder /home/node/build ./app
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "app/index.js", "--max-old-space-size=512"]