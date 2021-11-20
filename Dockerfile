FROM node:12.22
WORKDIR /usr/src/4-natours
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 7000
CMD [ "nodemon"]