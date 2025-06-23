
const db = require('../mysql');

const Produto = {
  getAll: (callback) => {
    db.query('SELECT * FROM produtos', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM produtos WHERE id = ?', [id], callback);
  },
  create: (produto, callback) => {
    const { nome, marca, modelo, preco, estoque, imagem } = produto;
    db.query(
      'INSERT INTO produtos (nome, marca, modelo, preco, estoque, imagem) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, marca, modelo, preco, estoque, imagem],
      callback
    );
  },
  update: (id, produto, callback) => {
    const { nome, marca, modelo, preco, estoque, imagem } = produto;
    db.query(
      'UPDATE produtos SET nome=?, marca=?, modelo=?, preco=?, estoque=?, imagem=? WHERE id=?',
      [nome, marca, modelo, preco, estoque, imagem, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM produtos WHERE id = ?', [id], callback);
  }
};

module.exports = Produto;
