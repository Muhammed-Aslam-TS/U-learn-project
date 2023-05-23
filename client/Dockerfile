
# Base image
FROM node:18.16.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Create a lightweight image
FROM nginx:1.21.0-alpine

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/angular-app /usr/share/nginx/html

# Expose the port on which the app will run (default: 80)
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
