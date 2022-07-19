# Projeto LabECommerce

## Sobre o Projeto

Criação de endpoints e modelagem de banco de dados.

## Funcionalidades

- [x] Cadastro de usuário

- [x] Busca por todos os usuários, retornando também as compras de cada usuário

- [x] Cadastro de produtos

- [x] Busca por todos os produtos, usando query params para ordernar e filtrar

- [x] Registro de compra

- [x] Busca das compras de um usuário

## Tecnologias utilizadas

```
Server (NodeJS + TypeScript)
    Express
    CORS
    KnexJS
    ts-node
    dotENV
```

## Rodando o projeto

Acesse a pasta `/src` e insira as informações de conexão com o banco de dados usando o modelo de arquivo `.env` abaixo:

```
DB_HOST= 
DB_PORT= 
DB_USER= 
DB_PASSWORD= 
DB_DATABASE= 
```

Depois instale as dependências usando:

```
npm install
```

Para rodar o projeto execute:

```
npm run dev
```

Agora seu back-end estará rodando na porta 3003.

### Deploy da aplicação
[https://labecommerce-backend.herokuapp.com/](https://labecommerce-backend.herokuapp.com/)