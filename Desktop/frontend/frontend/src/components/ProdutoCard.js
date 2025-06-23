
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProdutoCard({ produto, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
      <img src={produto.imagem} alt={produto.nome} width="150" />
      <h3>{produto.nome}</h3>
      <p><strong>Marca:</strong> {produto.marca}</p>
      <p><strong>Modelo:</strong> {produto.modelo}</p>
      <p><strong>Preço:</strong> R$ {produto.preco}</p>
      <p><strong>Estoque:</strong> {produto.estoque}</p>
      <button onClick={() => navigate(`/editar/${produto.id}`)}>Editar</button>
      <button onClick={() => onDelete(produto.id)}>Excluir</button>
    </div>
  );
}

export default ProdutoCard;
