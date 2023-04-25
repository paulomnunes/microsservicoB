# MicrosserviçoB
Este é um microsserviço que oferece operações relacionadas aos dados de score. Ele foi criado utilizando o framework Express.js e o banco de dados MongoDB.

## Pré-requisitos
Para rodar o MicrosserviçoB, você precisa ter o Node.js instalado em sua máquina. Além disso, é necessário ter uma conta no MongoDB Atlas para acessar o banco de dados.

## Instalação
Faça o download ou clone deste repositório em sua máquina.
Abra o terminal e navegue até a pasta onde o repositório foi salvo.
Execute o comando `npm install` para instalar as dependências do projeto.
Configuração
Antes de iniciar o microsserviço, você precisa configurar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

DB_USER=seu_usuario_do_mongodb

DB_PASSWORD=sua_senha_do_mongodb

Substitua `seu_usuario_do_mongodb` e `sua_senha_do_mongodb` pelos seus próprios dados de acesso.

## Uso
Para iniciar o microsserviço, execute o comando `npm start`. Ele irá rodar o servidor na porta 3000.

## Endpoints
Aqui estão os endpoints disponíveis no microsserviço:

`GET /`: Retorna uma mensagem de boas-vindas e a lista de endpoints disponíveis.

`GET /dadosScore`: Retorna uma lista com todos os dados de score.

`GET /dadosScore/:id`: Retorna os dados de score com o ID correspondente.

`POST /dadosScore`: Cria um novo registro de dados de score.

`PATCH /dadosScore/:id`: Atualiza os dados de score com o ID correspondente.

`DELETE /dadosScore/:id`: Deleta os dados de score com o ID correspondente.

## Estrutura do projeto
O projeto está organizado da seguinte maneira:

`index.js`: Arquivo principal que inicia o servidor e define as rotas.

`db/conn.js`: Arquivo que conecta ao banco de dados MongoDB.

`routes/router.js`: Arquivo que define as rotas gerais do projeto.

`routes/dadosScoreRouter.js`: Arquivo que define as rotas específicas para manipulação dos dados de score.

`models/dadosScore.js`: Arquivo que define o modelo de dados de score para ser utilizado no MongoDB.

`controllers/dadosScoreController.js`: Arquivo que contém funções para realizar o CRUD dos dados de score no MongoDB.

`postman_collection/Microsserviço B.postman_collection.json`: Arquivo para importar a collection do Postman e realizar testes na API.

`package.json`: Arquivo que contém informações do projeto, dependências e scripts disponíveis.