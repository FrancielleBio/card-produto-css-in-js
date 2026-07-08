import styled from "styled-components";

const Pagina = styled.main`
min-height:100vh;display:flex;justify-content:center;align-items:center;
background:#f2f2f2;font-family:Arial,sans-serif;`;

const CardProduto = styled.div`
width:300px;background:#fff;padding:24px;border-radius:12px;
box-shadow:0 4px 12px rgba(0,0,0,.15);text-align:center;`;

const NomeProduto = styled.h2`color:#333;`;
const PrecoProduto = styled.p`font-size:20px;font-weight:bold;color:#555;`;

const BotaoCarrinho = styled.button`
padding:12px 18px;border:none;border-radius:8px;color:white;cursor:pointer;
background:${props=>props.adicionado ? "#198754" : "#6c757d"};
&:hover{opacity:.9;}
`;

export default function App(){
 const produto={nome:"Tênis Esportivo",preco:"R$ 199,90",adicionado:false};
 return (
  <Pagina>
   <CardProduto>
    <NomeProduto>{produto.nome}</NomeProduto>
    <PrecoProduto>{produto.preco}</PrecoProduto>
    <BotaoCarrinho adicionado={produto.adicionado}>
      Adicionar ao carrinho
    </BotaoCarrinho>
   </CardProduto>
  </Pagina>
 );
}
