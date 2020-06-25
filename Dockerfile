FROM node:12.18.1

WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install deps
RUN npm i

RUN npm run build

CMD ["npm", "run", "start"]
