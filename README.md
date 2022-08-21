<h1>TrybeSmith [Trybe]</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Como rodar os teste](#como-rodar-os-testes)

:small_blue_diamond: [Dependências e Libs](#linguagens-dependencias-e-libs-utilizadas-books)

:small_blue_diamond: [Licença](#licença)


## Descrição do projeto 

<p align="justify">
  Este é um projeto proposto pela Trybe para desenvolvermos uma API com <b>CRUD</b> em <b>MySQL</b> para treinarmos typescript aplicando os princípios do <b>POO</b>.
  O intuito da API é fornecer um CRUD para uma loja de itens medievais.
</p>
<p>Foi possível aplicar vários conceitos de POO, conceito de camadas e o conceito de tipagem usada pelo Typescript</p>

## Funcionalidades

:heavy_check_mark: Cadastrar usuário.  

:heavy_check_mark: Buscar todos os produtos.

:heavy_check_mark: cadastrar produto.  

:heavy_check_mark: Buscar todos os pedidos.

:heavy_check_mark: Cadastrar pedido.

:heavy_check_mark: Fazer login.


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Git](https://git-scm.com/downloads)
:warning: [MySQL](https://dev.mysql.com/downloads/)

## Como rodar a aplicação :arrow_forward:

#### No terminal:
Clone o projeto: 

```
git clone https://github.com/orlandodantas/trybesmith-trybe.git
```
Entre na pasta do projeto: 

```
cd trybesmith-trybe
```

Instale as dependências: 

```sh
npm install
```
Renomei o arquivo .env.exemple para .env:
> Unix
```sh
mv .env.exemple .env
```
> Windows
```sh
rename .env.exemple .env
```
Abra o arquivo que acabou de renomear em um Editor/IDE de sua preferência por exemplo [VsCode](https://code.visualstudio.com/):
> Onde tem MYSQL_USER=seu_usuario_mysql troque seu_usuario_mysql pelo usuário root do MySQL, onde tem MYSQL_PASSWORD=sua_senha_mysql troque sua_senha_mysql pela senha do usuario root do MySQL.

Restaurar o banco de dados:
> Primeiramente siga o método 1 deste tutorial [aqui](https://pt.wikihow.com/Abrir-um-Arquivo-SQL#:~:text=Fa%C3%A7a%2Do%20usando%20a%20janela,nome%20para%20selecionar%20o%20arquivo.&text=Clique%20em%20Abrir%20no%20canto,e%20editar%20seu%20script%20SQL.) para abrir o script ```Trybesmith.sql``` que se encontra na raiz do diretório trybesmith-trybe, após o script aparecer no editor do Workbench clique no icone de um raio, para executar o script. Se tudo ocorrer bem é só prosseguir com os próximos passos.

Rodar a aplicação:

```sh
npm run dev
```

> Agora a aplicação está pronta para ser usada em um cliente rest por exemplo o [Insomnia](https://insomnia.rest/download).


## Como rodar os testes

#### Em um terminal:
Rodar a execução dos testes:

```sh
npm run test
```

## Linguagens, dependências e libs utilizadas :books:

- [Node](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Joi](https://www.npmjs.com/package/joi)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
- [Restify Errors](https://www.npmjs.com/package/restify-errors)
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [MySQL2](https://www.npmjs.com/package/mysql2)

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - ToDo List API
