# Use the official Node.js image as a base image
FROM node:16

# Install nodemon globally
RUN npm install -g nodemon

# Set the working directory inside the container
WORKDIR ./

# Copy the package.json and package-lock.json files
COPY package*.json ./mini-crm-back/

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["nodemon", "server.js"]
