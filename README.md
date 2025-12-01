🏭 Indústria 4.0 – Sistema Completo de Automação e Controle de Produção
IoT • React • Node.js • Express • Prisma • MySQL • Docker • AWS • Bancada Smart 4.0


📘 1. Visão Geral

Este projeto implementa uma solução completa baseada nos conceitos da Indústria 4.0, permitindo:

Criar produtos com 5 características customizáveis (até 3 opções cada)

Enviar pedidos de montagem para a Bancada Smart 4.0

Receber automaticamente o status da produção

Gerenciar produtos e pedidos via dashboard moderno

Executar backend em MySQL local e depois hospedar em AWS

Utilizar Docker para conteinerização e deploy

Backend e frontend se comunicam via API RESTful e as atualizações acontecem automaticamente.

🧱 2. Arquitetura Geral
FRONTEND (React + Vite)
        ↓  Axios
BACKEND (Node.js + Express + Prisma)
        ↓  HTTP
Bancada Smart 4.0 (IoT)
        ↓  Callback
MySQL (Local e AWS RDS)

🛠️ 3. Tecnologias Utilizadas
Frontend

React + Vite

Axios

CSS puro

Hooks (useState, useEffect)

Backend

Node.js + Express

TypeScript

Prisma ORM

JWT Auth

Axios (para integração IoT)

MySQL (local e remoto AWS)

Infra

Docker

Docker Compose

AWS EC2 + (RDS opcional)

🧩 4. Funcionalidades
✔ Frontend

Formulário de criação de produto com 5 características

Lista de produtos com botão Enviar para Produção

Dashboard de pedidos com status

Atualização automática a cada 3 segundos

✔ Backend

Autenticação JWT

CRUD de Produtos

CRUD de Pedidos

Envio para a Bancada Smart 4.0

Recebimento de callback de status

Banco MySQL

✔ IoT

Backend envia:
POST http://IP_DA_BANCADA:3000/queue/items

Bancada responde via callback para atualizar o pedido

🛢️ 5. Banco de Dados (MySQL)
Criar banco local
CREATE DATABASE sa_quartafase;

Configurar .env
DATABASE_URL="mysql://root:SUA_SENHA@localhost:3306/sa_quartafase"
JWT_SECRET="seu_segredo_qualquer"

Criar tabelas
npx prisma migrate dev

⚙️ 6. Como Rodar o Backend
cd auth_jwt
npm install
npm run dev


Backend: http://localhost:3000

💻 7. Como Rodar o Frontend
cd frontend
npm install
npm run dev


Frontend: http://localhost:5173

🤖 8. Integração com a Bancada Smart 4.0
Payload enviado
{
  "payload": {
    "orderId": 10,
    "order": [
      { "bloco": "Montagem A" }
    ]
  },
  "callbackUrl": "http://SEU_SERVIDOR/pedidos/10"
}

Callback recebido
{
  "status": "Finalizado"
}

📡 9. Rotas da API
Produtos
GET /produtos
POST /produtos
PUT /produtos/:id
DELETE /produtos/:id

Pedidos
POST /pedidos
GET /pedidos
GET /pedidos/:id
POST /pedidos/:id (callback IoT)

🐳 10. Docker
Backend DEV
docker build -t auth_jwt:dev --target dev .

Backend PROD
docker build -t auth_jwt:prod --target prod .
docker run -p 3000:3000 auth_jwt:prod

☁️ 11. Deploy na AWS (Resumo)

Criar EC2

Instalar Docker

Clonar repositório

Rodar backend

Apontar bancada para o IP público

Realizar testes de produção

👨‍💻 12. Autor

Leandro Junges Lemes
Dev  • IoT • Indústria 4.0
GitHub: https://github.com/LeandrojLemes
