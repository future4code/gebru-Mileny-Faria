# Projeto To Do List

## Sobre o Projeto

Este projeto consiste numa modelagem de banco de dados usando MySQL e a implementação no banck-end, para o curso da Labenu Full Stack.

## Funcionalidades

- [x] Criar Usuário: Com método POST, path /user, o código valida se os três campos estão completos e retorna um erro caso não estejam válidos, o código também gera o id do usuário.

- [x] Pegar Id do Usuário: Com método GET, path /user/:id, o endpoint retorna um erro caso não encontre o usuário.

- [x] Editar Usuário: Com método PUT, path /user/edit/:id, o código só altera o que for enviado. Se algum valor enviado for vazio, retorna um erro.

- [x] Criar Tarefa: Com método POST, path /task, o código valida se todos os campos não estão vazios e gera o id da tarefa.

- [x] Pegar Tarefa pelo Id: Com método GET, path /task/:id, o endpoint retorna um erro se não encontra a task, e o endpoint retorna informações tanto da tarefa como do usuário criador.

- [x] Pegar todos os Usuários: Com método GET, path /users, o endpoint retorna um array vazio se não encontra resultados.

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

### Back-end

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