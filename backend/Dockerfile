# build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server/ .
# no build step if pure Node API - still keep small

# final image
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
EXPOSE 4000
CMD ["node", "index.js"]  # adapte si ton fichier principal a un autre  nom
