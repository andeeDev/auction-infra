FROM node:18-slim AS build

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./

# build js & remove devDependencies from node_modules
RUN npm run build

# CMD ["npm", "run", "start:dev"]
FROM node:18-slim


ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules


ENTRYPOINT [ "node" ]
CMD [ "dist/main.js" ]