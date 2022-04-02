FROM node:16.14.2-alpine3.15 as builder
RUN apk add --no-cache vips-dev build-base 
RUN mkdir -p /home/node/app
RUN mkdir /home/node/.npm-global
RUN chown -R node:node /home/node
WORKDIR /home/node
COPY app/ ./app
COPY index.ts .
COPY tsconfig.json .
COPY ["package.json", "package-lock.json", "./"]
# RUN mkdir -p /home/node/.npm-global
# RUN npm config set prefix '/home/node/.npm-global'
RUN chmod -R 777 /root
RUN mkdir -p /root/.npm
RUN chown -R root:root /root/.npm
RUN chmod -R 777 /root/.npm
RUN npm install --unsafe-perm
RUN chmod -R 700 /root
RUN npm run build
RUN chown -R node:node ./build



FROM node:16.14.2-alpine3.15
RUN mkdir -p /home/node/app && chown -R node:node /home/node
RUN apk add --no-cache tini
USER node
WORKDIR /home/node
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --production
ENV NODE_ENV production
ENV ADMIN 09034704227
ENV JWT_EXPIRES 313
COPY --from=builder /home/node/build ./app
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "app/index.js", "--max-old-space-size=512"]
