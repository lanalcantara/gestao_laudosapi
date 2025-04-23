const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const caseRoutes = require('./src/routes/case.routes'); // Verifique se o caminho está correto
const laudoRoutes = require('./src/routes/laudo.routes'); // Certifique-se de que a rota de laudo existe

// Configurar variáveis de ambiente
dotenv.config();

// Iniciar o servidor Express
const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Definindo as rotas
app.use('/api/cases', caseRoutes);  // A rota dos casos
app.use('/api/laudos', laudoRoutes);  // A rota dos laudos

// Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Iniciar servidor na porta 5000 ou a porta definida na variável de ambiente
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
