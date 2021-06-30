FROM node:14-slim
WORKDIR /usr/src/vue
COPY . . 
ENV HOST=http://server:3000
RUN npm cache clean --force
RUN npm install
RUN npm install -g serve
RUN npm run build
CMD ["serve","-l","8080","dist"];