
# CellTech API - Backend Node.js + MySQL

API RESTful para gerenciamento de celulares com Node.js, Express e MySQL.

## 🔧 Tecnologias

- Node.js
- Express
- MySQL
- Cors

## 🔌 Rotas da API

- `GET /produtos` – Lista todos os produtos
- `GET /produtos/:id` – Retorna um produto específico
- `POST /produtos` – Cadastra um novo produto
- `PUT /produtos/:id` – Atualiza um produto existente
- `DELETE /produtos/:id` – Remove um produto

### 📦 Exemplo de JSON

```json
{
  "nome": "iPhone 14",
  "marca": "Apple",
  "modelo": "A2882",
  "preco": 5999.99,
  "estoque": 12,
  "imagem": "https://example.com/iphone14.jpg"
}
```

## ▶️ Execução

### Banco de dados

Execute no MySQL:

```sql
CREATE DATABASE celltech;
USE celltech;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  marca VARCHAR(100),
  modelo VARCHAR(100),
  preco DECIMAL(10,2),
  estoque INT,
  imagem TEXT
);
```

### Instalação e execução do servidor

```bash
npm install
npm start
```

Servidor rodará em `http://localhost:3001`
