FROM node:20-alpine3.20 AS build

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY ./ ./

RUN pnpm build

FROM nginx:stable-alpine AS production

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]