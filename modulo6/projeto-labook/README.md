# LABOOK

## Sobre o Projeto
O LaBook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. 

## Funcionalidades
[x] Cadastro de Usuário

[x] Criação de posts

[x] Buscar posts - em implementação

[x] Fazer e desfazer amizades

[x] Ver o feed com a postagem dos amigos  - em implementação

[x] Curtir e descurtir posts  - em implementação

[x] Comentar os posts  - em implementação

## Tecnologias utilizadas
```
Server (NodeJS + Typescript)
   Express
   Cors
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
[https://labook-backend.herokuapp.com/](https://labook-backend.herokuapp.com/)