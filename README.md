Projeto que simula as principais funções back-end de um blog. Temos as principais funções: login, autenticação de usuário, postagem de publicações e gerenciamento de usuários. 

O projeto foi feito ultilizando o docker e MYSQL com sequelize e JWT (Web Token).

## Utilização

1. Clonar o repositório

```
git clone git@github.com:RiicardoGabriel/blog-rico.git
```

2. Entrar no diretório do projeto

```
cd blog-rico
```

3. Inicializar o back-end (obs.: deve ter o docker, docker-compose instalado e mysql)

```
docker-compose up -d --build
```

4. Entrar e inicializar o container

```
docker exec -it blogs_api bash
npm install
npm start
```
