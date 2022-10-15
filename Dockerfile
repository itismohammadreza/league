FROM node:16.16.0

RUN mkdir -p /app
COPY . /app/
WORKDIR /app

RUN npm install --location=global npm
RUN npm install --location=global http-server
RUN npm install --location=global @angular/cli
RUN npm install
RUN npm run build

CMD ["http-server", "dist/", "-a", "0.0.0.0", "-p", "83"]
