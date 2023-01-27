FROM node:19-alpine3.16 as base
COPY . ./code
WORKDIR /code

RUN yarn install
RUN yarn build

FROM node:19-alpine3.16 as final

WORKDIR /code
COPY --from=base ./code/public ./public
COPY --from=base ./code/package.json ./package.json
COPY --from=base ./code/node_modules ./node_modules
COPY --from=base ./code/.cache ./.cache
