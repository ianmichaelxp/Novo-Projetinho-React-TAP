FROM node:latest
ENV PORT=5000
ENV DATABASE_HOST=meu-mongo
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE $PORT