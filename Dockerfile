# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose the port
EXPOSE 8000

# Start the app
CMD ["node", "server.js"]



#Dockerfile & server.js must be present in Current Directory (.)  / So i need to Move this Dockerfile from public/dockerfile to .   (i used command mv public/Dockerfile . )
