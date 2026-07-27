FROM node:22-alpine AS base

# Install dependencies only
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build backend TypeScript
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.backend.json tsconfig.json ./
COPY src/backend ./src/backend
COPY src/utils ./src/utils
COPY src/types ./src/types
RUN npm run build:backend

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 backendjs

COPY --from=deps --chown=backendjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=backendjs:nodejs /app/dist/backend ./dist/backend
COPY package.json ./

USER backendjs

EXPOSE 3001

ENV PORT=3001

CMD ["node", "dist/backend/app/server.js"]
