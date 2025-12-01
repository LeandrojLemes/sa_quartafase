# =============================
#   STAGE 1 — Build do Vite
# =============================
FROM node:18 AS build

WORKDIR /app

# Copia apenas as dependências primeiro
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Gera o build de produção
RUN npm run build


# =============================
#   STAGE 2 — Servidor NGINX
# =============================
FROM nginx:latest

# Copia o build gerado pelo Vite para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 para acesso no navegador
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
