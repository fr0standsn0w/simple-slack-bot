FROM node:18-alpine AS base
CMD ["sh", "-c", "yarn && yarn dev"]

FROM base AS builder
WORKDIR /app
COPY package*.json yarn.lock app.js /app/
RUN yarn

FROM base AS executor
WORKDIR /prod
COPY --from=builder /app /prod
RUN yarn
CMD ["yarn", "prod"]
