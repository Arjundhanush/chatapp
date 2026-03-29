# ============================================
# Backend API server
# ============================================
FROM node:18-alpine

WORKDIR /app

# Copy package files for layer caching
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application code
COPY . .

EXPOSE 3001

# Use node directly (nodemon is for development only)
CMD ["node", "index.js"]
