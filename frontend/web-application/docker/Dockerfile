# Use a stable, modern Node.js image
FROM node:18-alpine

# Create and set working directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json ./

# Install dependencies (in Docker cache layer if possible)
RUN npm install --legacy-peer-deps

# Copy the rest of your app's code
COPY . .

# Expose the port the app runs on (Angular default is 4200)
EXPOSE 4200

# Start the app
CMD ["npm", "start"]
