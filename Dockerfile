# Dockerfile
FROM node:20

# Install Firebase CLI globally
RUN npm install -g firebase-tools

# Copy project to container
WORKDIR /app
COPY . . 

# Run firebase deploy as standard command when container starts
CMD ["firebase", "deploy", "--only", "hosting"]