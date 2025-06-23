
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProdutoCard from '../components/ProdutoCard';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produtos')
      .then(res => setProdutos(res.data))
      .catch(err => alert('Erro ao carregar produtos.'));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Deseja excluir este produto?")) {
      axios.delete(`http://localhost:3001/produtos/${id}`)
        .then(() => setProdutos(produtos.filter(p => p.id !== id)))
        .catch(err => alert('Erro ao excluir.'));
    }
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {produtos.length > 0 ? (
        produtos.map(produto => (
          <ProdutoCard key={produto.id} produto={produto} onDelete={handleDelete} />
        ))
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </div>
  );
}

export default Produtos;
