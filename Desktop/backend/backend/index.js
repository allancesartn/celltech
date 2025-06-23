
const express = require('express');
const cors = require('cors');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');

app.use(cors());
app.use(express.json());
app.use('/produtos', produtoRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
