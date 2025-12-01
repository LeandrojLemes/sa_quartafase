# 🚀 Projeto Indústria 4.0 – Sistema de Controle de Produção com IoT, Node.js, React e AWS

Este projeto implementa uma solução completa de automação industrial baseada nos princípios da **Indústria 4.0**, integrando:

- **Aplicação Web (React)**
- **API REST segura (Node.js + Express + JWT)**
- **Banco de Dados (MySQL / posteriormente PostgreSQL, dependendo da implementação final)**
- **Comunicação com Bancada Smart 4.0 via HTTP**
- **Integração IoT com callback de status**
- **Implantação em AWS com Docker**

O objetivo principal é simular todo o fluxo de produção de uma fábrica digital:

1. Criação de produtos personalizados (5 características com até 3 opções cada)
2. Envio do pedido para a bancada física Smart 4.0
3. Processamento IoT via HTTP
4. Retorno automático de status de produção
5. Atualização em tempo real no painel do usuário

---

# 📌 Funcionalidades Entregues

## 🔵 1. Front-End (React + Vite)

✔ Interface moderna e responsiva  
✔ Cadastro de produtos com 5 características:  
- Modelo  
- Cor  
- Ano  
- Motor  
- Câmbio  
✔ Visualização de estoque  
✔ Envio de pedidos para produção  
✔ Atualização automática de status  
✔ Painel amigável com tabela de pedidos  
✔ JWT funcionando no front-end  
✔ Axios configurado com interceptors para renovar token automaticamente  

---

## 🟠 2. Back-End (Node.js + Express + JWT + Prisma)

✔ API REST estruturada em **MVC**  
✔ Autenticação completa com JWT (login + refresh)  
✔ CRUD de produtos  
✔ CRUD de pedidos  
✔ Integração com a bancada Smart 4.0 via HTTP  
✔ Callback automático atualizando o status do pedido  
✔ Banco de dados via Prisma ORM  
✔ Suporte a MySQL  

---

## 🟢 3. IoT / Bancada Smart 4.0

A API envia automaticamente um pacote HTTP para a bancada física:

**Endpoint da bancada**  
POST http://52.1.197.112:3000/queue/items


**Payload enviado**
```json
{
  "payload": {
    "orderId": 12,
    "order": [
      { "bloco": "Montagem A" }
    ]
  },
  "callbackUrl": "http://meu-servidor.com/pedidos/12"
}


✔ A bancada devolve o status para o backend no callback, que atualiza o pedido no banco.

🔴 4. Docker e Implantação na Nuvem (AWS)

✔ Dockerfile configurado
✔ docker-compose para subir API + banco
✔ Deploy funcional em AWS EC2
✔ API rodando em ambiente de produção
✔ Contêiner isolado e seguro

📂 Estrutura do Projeto
sa_quartafase/
 ├── auth_jwt/                → Backend completo
 │   ├── src/
 │   │   ├── app.ts
 │   │   ├── controllers/
 │   │   ├── routes/
 │   │   ├── services/
 │   │   ├── utils/
 │   │   └── middleware/
 │   ├── prisma/
 │   ├── Dockerfile
 │   └── docker-compose.yml
 │
 ├── frontend/                → Aplicação React
 │   ├── src/
 │   ├── public/
 │   ├── vite.config.js
 │   └── package.json
 │
 ├── README.md                → Este arquivo
 └── docs/                    → (opcional) Relatórios e manuais

⚙️ Como Executar Localmente
🔧 Backend
cd auth_jwt
npm install
npx prisma migrate dev
npm run dev

🎨 Frontend
cd frontend
npm install
npm run dev


Aplicação disponível em:
👉 http://localhost:5173

🐳 Rodando com Docker
Build da imagem
docker build -t auth_jwt:prod --target prod .

Subir contêineres
docker-compose up -d

🌎 Deploy na AWS – Resumo
1. Criar instância EC2

Ubuntu 22.04 com porta 3000 liberada.

2. Instalar Docker
sudo apt update
sudo apt install docker.io docker-compose -y

3. Clonar repositório
git clone https://github.com/LeandrojLemes/sa_quartafase.git
cd sa_quartafase/auth_jwt

4. Subir API
docker-compose up -d --build

📘 Manual do Usuário (Resumo)
1. Login

O usuário acessa o sistema via email e senha.

2. Criar Produto

Seleciona características e salva no banco.

3. Enviar para Produção

O front envia a ordem para o backend → bancada.

4. Acompanhar Status

A tabela de pedidos atualiza automaticamente.

5. Logout

Finaliza sessão com segurança.

📗 Relatório Técnico (Resumo)
Tecnologias

React + Vite

Node.js + Express

Docker

MySQL

Prisma

JWT

AWS EC2

Axios

IoT HTTP Callback

Arquitetura

API MVC

Front SPA

Contêineres independentes

Comunicação REST

Callback IoT

👨‍💻 Autor

Leandro J. Lemes
4ª fase – Desenvolvimento de Sistemas
Projeto Indústria 4.0


