
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProdutoForm from '../components/ProdutoForm';

function Editar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    nome: '', marca: '', modelo: '', preco: '', estoque: '', imagem: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/produtos/${id}`)
      .then(res => setProduto(res.data))
      .catch(err => alert('Erro ao buscar produto.'));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/produtos/${id}`, produto)
      .then(() => navigate('/'))
      .catch(err => alert('Erro ao atualizar produto.'));
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <ProdutoForm produto={produto} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default Editar;
