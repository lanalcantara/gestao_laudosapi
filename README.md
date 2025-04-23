# Backend - Sistema de Laudos Periciais

Backend completo em Node.js com Express, MongoDB, autenticação JWT e geração de PDFs.

## Tecnologias

- Node.js + Express
- MongoDB + Mongoose
- JWT (Auth)
- PDFKit (Geração de Laudo)
- Jest + Supertest (Testes)
- Deploy-ready para Vercel

## Como usar

1. Clone:
   git clone https://github.com/seuusuario/backend-laudos.git

2. Instale dependências:
   npm install

3. Crie um `.env`:
   MONGO_URI=mongodb://localhost:27017/laudos
   JWT_SECRET=sua_chave

4. Rode:
   npm start

##Rotas

- /api/auth (registro/login/me)
- /api/cases (CRUD de Casos)
- /api/evidences (por caso, adicionar/remover)
- /api/pdf/:id (gera PDF do laudo)

##Testes

npm test
