FROM node:14-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . . 
ENV DB_URL=mongodb://mongo1:27017,mongo2:27017,mongo3:27017/?replicaSet=rs0
RUN npm install
CMD ["npm","run","start"];