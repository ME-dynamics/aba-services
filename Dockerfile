FROM node:14-alpine as builder
RUN mkdir -p /home/node/app/packages
WORKDIR /home/node/app
COPY packages/ ./packages
COPY index.ts .
COPY tsconfig.json .
COPY package*.json ./
RUN npm install
RUN npm run build
RUN chown -R node:node ./build



FROM node:14-alpine
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
USER node
WORKDIR /home/node/app
COPY package*.json ./
ENV NODE_ENV production
RUN npm install --production
COPY --from=builder /home/node/app/build ./build
CMD ["node", "build/index.js"]