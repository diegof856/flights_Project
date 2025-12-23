FROM node:latest
WORKDIR /api
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN cp -r src/data build/data
RUN npm prune --production
#env
ENV PORT='3333'
ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "build/index.js"]
