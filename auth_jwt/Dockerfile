# ============================
#  STAGE 1 — DEPENDÊNCIAS
# ============================
FROM node:18 AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install

# ============================
#  STAGE 2 — BUILD
# ============================
FROM node:18 AS build

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npx prisma generate
RUN npm run build

# ============================
#  STAGE 3 — PRODUÇÃO
# ============================
FROM node:18 AS prod

WORKDIR /app

COPY --from=build /app ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/app.js"]
