FROM node:16.14.0-alpine3.15 as builder
RUN mkdir -p /home/node/app
RUN mkdir /home/node/.npm-global
RUN chown -R node:node /home/node
WORKDIR /home/node
COPY app/ ./app
COPY index.ts .
COPY tsconfig.json .
COPY ["package.json", "package-lock.json", "./"]
RUN apk add --no-cache vips-dev build-base 
RUN npm config set prefix '/home/node/.npm-global'
RUN npm install --unsafe-perm
RUN npm run build
RUN chown -R node:node ./build



FROM node:16.13.1-alpine3.14
RUN mkdir -p /home/node/app && chown -R node:node /home/node
RUN apk add --no-cache tini
USER node
WORKDIR /home/node
COPY ["package.json", "package-lock.json", "./"]
ENV NODE_ENV production
ENV ADMIN 09034704227
ENV JWT_EXPIRES 100000
RUN npm ci --production
COPY --from=builder /home/node/build ./app
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "app/index.js", "--max-old-space-size=512"]