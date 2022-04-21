FROM node:16-alpine
WORKDIR /app
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 3000
CMD yarn dev
