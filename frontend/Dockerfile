FROM node:13 AS builder
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_URL_BACKEND=5000/cadastros
ENV REACT_APP_HOST_BACKEND=localhost
RUN npm run build

FROM nginx AS server
COPY --from=builder build /usr/share/nginx/html