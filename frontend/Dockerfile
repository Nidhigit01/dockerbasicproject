# -------- Build stage --------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json explicitly
COPY package.json package-lock.json ./

# Install dependencies cleanly
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# -------- Runtime stage --------
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy static build from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Set ownership to nginx user for security
RUN chown -R nginx:nginx /usr/share/nginx/html

# Switch to non-root user
USER nginx

EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
