# Loja Online - Teste Técnico

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico para a [Nome da Empresa].  
O objetivo foi criar uma loja online simples utilizando **React** no frontend e um servidor falso de API com **JSON Server** para simular os dados dos produtos.

---

## Funcionalidades

- Lista de produtos  
- Página de detalhes do produto  
- Carrinho de compras com adição e remoção de itens  
- Cálculo do total do carrinho  
- Navegação entre as páginas usando **React Router**

---

## Tecnologias Utilizadas

- React  
- React Router DOM  
- Axios (para requisições HTTP)  
- JSON Server (API falsa para desenvolvimento)  
- Context API (para gerenciamento do estado do carrinho)

---

## Como Rodar o Projeto

### 1. Clonar o repositório

Abra o terminal (Prompt de Comando, PowerShell ou terminal do VSCode) e execute o comando abaixo para copiar o projeto para sua máquina:

```bash
git clone https://github.com/Dantas0525/loja-online---api---react.git


2. Entrar na pasta do projeto
No terminal, acesse a pasta do projeto com:

bash
Copiar
Editar
cd loja-online---api---react


3. Instalar as dependências
Ainda no terminal, rode o comando abaixo para instalar todas as bibliotecas que o projeto usa (como React, Axios etc):

bash
Copiar
Editar
npm install

4. Iniciar o servidor falso da API
O backend é simulado por um servidor que usa o arquivo dbTeste.json. Para ligá-lo, no terminal execute:

bash
Copiar
Editar
npm run server
Isso vai iniciar o JSON Server na porta 3001. O terminal vai mostrar mensagens dizendo que a API está rodando.

5. Iniciar a aplicação React
Abra outro terminal (não pare o terminal do servidor) e execute:

bash
Copiar
Editar
npm start
Isso vai abrir a aplicação no seu navegador padrão automaticamente, geralmente no endereço:
http://localhost:3000

Notas
O backend usa o arquivo dbTeste.json para simular dados dos produtos.

Rotas principais:

/ — lista de produtos

/product/:id — detalhes do produto

/cart — carrinho de compras

Considerações Finais
Este projeto demonstra conhecimentos básicos em React, gerenciamento de estado com Context API, consumo de APIs REST e navegação com React Router.

Qualquer dúvida ou sugestão, estou à disposição.


