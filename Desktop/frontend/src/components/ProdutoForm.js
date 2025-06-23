
import React from 'react';

function ProdutoForm({ produto, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="nome" value={produto.nome} onChange={onChange} placeholder="Nome" required />
      <input name="marca" value={produto.marca} onChange={onChange} placeholder="Marca" required />
      <input name="modelo" value={produto.modelo} onChange={onChange} placeholder="Modelo" required />
      <input name="preco" value={produto.preco} onChange={onChange} placeholder="Preço" required />
      <input name="estoque" value={produto.estoque} onChange={onChange} placeholder="Estoque" required />
      <input name="imagem" value={produto.imagem} onChange={onChange} placeholder="URL da imagem" required />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default ProdutoForm;
