# FrontEnd/Dockerfile
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm ci --prefer-offline

# Copy the rest of your application code
COPY . .

# Build the app
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
