# COOKENU

## Sobre o Projeto
Esse projeto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ele possui todas as funcionalidades mais comuns em redes sociais.

## Funcionalidades
[X] Cadastro de Usuário: O usuário precisa informar o e-mail, nome e senha para realizar o cadastro, se o acesso é NORMAL ou ADMIN O nome precisa ter mais que 3 letras e a senha deve conter, no mínimo, 6 caracteres. Retorna um token de autorização.

[X] Login: Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Retorna um token de autorização.

[X] Informações do próprio perfil: A partir do token de autenticação fornecido no login, o usuário é capaz de ver as suas informações: id e email.

[X] Informações do perfil de outro usuário: A partir do token de autenticação fornecido no login, o usuário é capaz de ver as informações de outro usuário, fornecendo o id do mesmo.

[X] Seguir usuário: Um usuário pode seguir outros usuários, fornececendo o id do usuário que deseja seguir.

[X] Deixar de seguir usuário: Um usuário pode deixar de seguir outros usuários, fornececendo o id do usuário que deseja deixar de seguir.
    
[X] Criar receitas: O usuário pode criar uma receita, inserindo título e modo de preparo.

[X] Pegar receita: O usuário pode pegar uma receita fornecendo o id dela.

[X] Editar receita: O usuário pode editar suas receitas fornecendo o id dela.

[X] Deletar receita: O usuário pode deletar uma receita fornecendo o id dela.

## Tecnologias Utilizadas

```
Server (NodeJS + Typescript)
    Express
    Cors
    KnexJS
    ts-node
    dotENV
    BbcryptJS
    JSON Web Token
    MySQL
    UUID
```

## Rodando o Projeto

Acesse a pasta `/src` e insira as informações de conexão com o banco de dados usando o modelo de arquivo `.env` abaixo:

```
DB_HOST= 
DB_PORT= 
DB_USER= 
DB_PASSWORD= 
DB_DATABASE= 
JWT_KEY=
BCRYPT_COST=
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

[Deploy da aplicação](https://mycookenu.herokuapp.com/)

