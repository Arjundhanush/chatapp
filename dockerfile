# Step 1: Base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy remaining files
COPY . .

# Step 6: Expose port
EXPOSE 3000

# Step 7: Run app
CMD ["npm", "start"]