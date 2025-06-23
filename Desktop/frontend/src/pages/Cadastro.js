
import React, { useState } from 'react';
import axios from 'axios';
import ProdutoForm from '../components/ProdutoForm';

function Cadastro() {
  const [produto, setProduto] = useState({
    nome: '', marca: '', modelo: '', preco: '', estoque: '', imagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/produtos', produto)
      .then(() => {
        alert('Produto cadastrado com sucesso!');
        setProduto({ nome: '', marca: '', modelo: '', preco: '', estoque: '', imagem: '' });
      })
      .catch(err => alert('Erro ao cadastrar produto.'));
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <ProdutoForm produto={produto} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default Cadastro;
