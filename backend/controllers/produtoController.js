
const Produto = require('../models/produto');

exports.getAll = (req, res) => {
  Produto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Produto.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  Produto.create(req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: results.insertId });
  });
};

exports.update = (req, res) => {
  Produto.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Produto atualizado' });
  });
};

exports.delete = (req, res) => {
  Produto.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(204).end();
  });
};
