import styled from 'styled-components';
import ProdutoCard from './components/ProdutoCard/ProdutoCard.jsx';

const Pagina = styled.main`
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Conteudo = styled.section`
  width: 100%;
  max-width: 1100px;
`;

const Cabecalho = styled.header`
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
`;

const Titulo = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 10px;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
`;

const Subtitulo = styled.p`
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.95;
`;

const GradeProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Headphone Bluetooth',
      preco: 199.9,
      imagem: '🎧',
    },
    {
      id: 2,
      nome: 'Smartwatch Rosa',
      preco: 249.9,
      imagem: '⌚',
    },
    {
      id: 3,
      nome: 'Teclado Mecânico',
      preco: 329.9,
      imagem: '⌨️',
    },
  ];

  return (
    <Pagina>
      <Conteudo>
        <Cabecalho>
          <Titulo>Produtos em Destaque</Titulo>
          <Subtitulo>
            Card de produto com React e Styled Components.
          </Subtitulo>
        </Cabecalho>

        <GradeProdutos>
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </GradeProdutos>
      </Conteudo>
    </Pagina>
  );
}

export default App;
