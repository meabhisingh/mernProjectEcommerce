FROM node

WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 4000 (assuming your Node.js application listens on this port)
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]
