FROM node:18.16.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN yarn install
COPY . .


EXPOSE 4000
CMD ["npm", "start"]
