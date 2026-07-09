# Card Produto CSS-in-JS

Projeto React desenvolvido com Vite e Styled Components para praticar CSS-in-JS.

## Funcionalidades

- Exibição de cards de produtos.
- Componente reutilizável `ProdutoCard`.
- Estilização com `styled-components`.
- Botão com cor dinâmica baseada no estado `adicionado`:
  - Verde `#198754` quando o produto foi adicionado.
  - Cinza `#6c757d` quando ainda não foi adicionado.
- Uso de `useState` para alternar visualmente o estado do botão ao clicar.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Styled Components
- CSS-in-JS

## Como rodar o projeto

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido no terminal.

## Estrutura principal

```txt
src
├── components
│   └── ProdutoCard
│       └── ProdutoCard.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Observação

O componente `ProdutoCard` recebe os dados por props, deixando o card reutilizável para diferentes produtos.
