// backend/index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000; 

app.use(cors()); // pra o frontend acessar
app.use(express.json());

// Rota teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
