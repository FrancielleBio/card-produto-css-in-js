import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.article`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 28px;
  text-align: center;
  box-shadow: 0 20px 45px rgba(31, 41, 55, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 55px rgba(31, 41, 55, 0.28);
  }
`;

const IconeProduto = styled.div`
  width: 92px;
  height: 92px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0f2fe, #fce7f3);
  font-size: 3rem;
`;

const NomeProduto = styled.h2`
  font-size: 1.45rem;
  color: #1f2937;
  margin-bottom: 10px;
`;

const PrecoProduto = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: #6d28d9;
  margin-bottom: 22px;
`;

// O botão usa a prop $adicionado para alterar dinamicamente a cor.
// O prefixo $ evita que essa prop seja enviada para o HTML final.
const BotaoCarrinho = styled.button`
  width: 100%;
  border: none;
  border-radius: 14px;
  padding: 14px 18px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ $adicionado }) =>
    $adicionado ? '#198754' : '#6c757d'};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
    filter: brightness(1.08);
  }
`;

function ProdutoCard({ nome, preco, imagem }) {
  const [adicionado, setAdicionado] = useState(false);

  function alternarCarrinho() {
    setAdicionado((estadoAtual) => !estadoAtual);
  }

  return (
    <Card>
      <IconeProduto>{imagem}</IconeProduto>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>
        {preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </PrecoProduto>

      <BotaoCarrinho $adicionado={adicionado} onClick={alternarCarrinho}>
        {adicionado ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
      </BotaoCarrinho>
    </Card>
  );
}

export default ProdutoCard;
