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
git clone https://github.com/orlandodantas/car-shop-trybe.git
```
Entre na pasta do projeto: 

```
cd car-shop-trybe
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
> Onde tem MYSQL_ROOT_PASSWORD=sua_password_mysql troque sua_password_mysql por uma senha a sua escolha para ser a senha de root
de acesso ao banco de dados. :warning: Atenção guarde esta senha que vamos usa-la mais a frente. Salve o arquivo e volte ao terminal.

Rodar a aplicação:

```sh
npm run dev
```

> Agora a aplicação está pronta para ser usada em um cliente rest por exemplo o [Insomnia](https://insomnia.rest/download).


## Como rodar os testes

#### Em um terminal:
Rodar a execução dos testes:

```sh
npm run test:dev
```

Rodar a execução do teste coverage:

```sh
npm run test:coverage
```

## Linguagens, dependencias e libs utilizadas :books:

- [Node](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Joi](https://www.npmjs.com/package/joi)
- [Zod](https://www.npmjs.com/package/zod)
- [Mongoose](https://www.npmjs.com/package/mongoose)

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - ToDo List API
