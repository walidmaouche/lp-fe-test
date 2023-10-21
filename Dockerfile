FROM node:18-alpine

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# COPY package.json package-lock.json ./
COPY . .
RUN npm install

# Bundle app source

EXPOSE 3000

CMD [ "npm", "run", "dev" ]