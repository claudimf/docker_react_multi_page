# Docker + React Multi-Page

👋 Olá, Seja Bem-vindo(a) ao 'Docker + React Multi-Page'.

## Criando a aplicação React:

1. Instalar o [NVM](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm/) para versão mais atual possível

2. Criar a aplicação 'frontend'(ou um nome que desejar):
```sh
npx create-react-app frontend
```

3. 'Dockerizar' a aplicação criada, para isso crie um arquivo [docker-compose.yml](https://github.com/claudimf/docker_react/blob/main/docker-compose.yml) na raiz do projeto com o seguinte conteúdo:
```sh
version: "3"
   
services:
  frontend:
    build: ./frontend
    container_name: frontend
    restart: always
    ports:
      - 3000:3000
    volumes:
      - ./frontend:/app
      - ./frontend/node_modules:/app/node_modules
    command: npm start
```

4. Verifique a versão instalada do seu node no terminal, neste caso a versão é a 15.0.1 que será utilizada no passo 5° para configurar o [Dockerfile](https://github.com/claudimf/docker_react/blob/main/frontend/Dockerfile):
```sh
node --version
```

5. Na pasta 'frontend' você deve criar o [Dockerfile](https://github.com/claudimf/docker_react/blob/main/frontend/Dockerfile) com o seguinte conteúdo:
```sh
FROM node:15.0.1

WORKDIR /app

COPY package.json /app/package.json

RUN npm install
RUN npm config set unsafe-perm true

COPY . /app

EXPOSE 3000
```

6. Construa sua aplicação:
```sh
docker-compose build
```

7. Atualizar npm do docker, rodando no terminal o seguinte comando:
```sh
docker-compose run --rm frontend npm uninstall -g create-react-app && npm i -g npm@latest && npm cache clean -f
```

8. Instalar o [React-Boostrap](https://medium.com/code-prestige/react-bootstrap-a-fus%C3%A3o-entre-o-react-e-o-bootstrap-48e8bd318359) no seu container:
```sh
docker-compose run --rm frontend npm install react-dom react-bootstrap bootstrap
```

9. Alterar seu [Dockerfile](https://github.com/claudimf/docker_react/blob/main/frontend/Dockerfile) copiando o arquivo package-lock.json(auto gerado pelo npm) para dentro de seu container Docker:
```sh
FROM node:15.0.1
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
RUN npm config set unsafe-perm true

COPY . /app

EXPOSE 3000
```

10. Suba seu projeto:
```sh
docker-compose up
```

11. Para visualizar o sistema basta acessar no navegador no endereço: [localhost:3000](http://localhost:3000/)

## Transformando sua aplicação React em ["Multi-Page"](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/):

1. Instalar o [react-router-dom](https://reactrouter.com/web/guides/quick-start) no seu container em um novo terminal:
```sh
docker-compose run --rm frontend npm install react-router-dom
```

2. Criar a pasta [components](https://github.com/claudimf/docker_react/tree/main/frontend/src/components)

3. Na pasta acima citada iremos criar nosso componentes(Páginas HTML inteira ou Componentes HTML parciais) com a seguinte estrutura abaixo:
```sh
components
├─── Header.jsx
├─── Home.jsx
├─── index.jsx
└─── Pagina.jsx

```

4. No component [Header.jsx](https://github.com/claudimf/docker_react/blob/main/frontend/src/components/Header.jsx) iremos colocar o seguinte conteúdo:
```sh
import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">
          <span className="ml-2">Projeto teste</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              className={`${ props.location.pathname === "/" ? "active" : "" }`}
            >
              Homepage
            </Nav.Link>

            <Nav.Link
              href="/pagina"
              className={`${ props.location.pathname === "/pagina" ? "active" : "" }`}
            >
              Página teste
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default withRouter(Header);

```

criando assim um cabeçalho(header) com os links para a página principal de nosso projeto e para uma outra página de testes

5. No component [Home.jsx](https://github.com/claudimf/docker_react/blob/main/frontend/src/components/Home.jsx) iremos colocar o seguinte conteúdo:
```sh
import React from 'react';
import { withRouter } from "react-router-dom";
import { Row } from 'react-bootstrap';

function Home() {
    return(
        <Row className="no-gutters justify-content-center px-5 m-5">
          <h2>Esta é a Homepage</h2>
        </Row>
    );
}

export default withRouter(Home);

```

5. No component [Pagina.jsx](https://github.com/claudimf/docker_react/blob/main/frontend/src/components/Pagina.jsx) iremos colocar o seguinte conteúdo:
```sh
import React from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

class Pagina extends React.Component {
  render() {
    return(
      <Row className="no-gutters justify-content-center mt-5">
        <Col md={12} className="text-center my-5">
          <h1>Esta é a Página teste</h1>
        </Col>
      </Row>
    )
  }
}

export default withRouter(Pagina);

```

6. No component [index.jsx](https://github.com/claudimf/docker_react/blob/main/frontend/src/components/index.jsx) iremos colocar o seguinte conteúdo:
```sh
export { default as Header } from "./Header"
export { default as Home } from "./Home"
export { default as Pagina } from "./Pagina"

```
esse arquivo tem a função de exportar seus componentes aonde ele for importado, como no caso da importação no arquivo [App.js](https://github.com/claudimf/docker_react/blob/main/frontend/src/App.js)


7. No arquivo [App.js](https://github.com/claudimf/docker_react/blob/main/frontend/src/App.js) iremos configurar as páginas que queremos acessar com o [react-router-dom](https://reactrouter.com/web/guides/quick-start) através do componente importado "Route" da biblioteca.

Após essas configurações você poderá verificar que o cabeçalho da aplicação contém os links abaixo e suas rotas estão funcionado:

* [Homepage - localhost:3000](http://localhost:3000/)
* [Página de testes - http://localhost:3000/pagina](http://localhost:3000/pagina)

## 🐳 Caso você só queira baixar o projeto, poderá entrar no 'Modo Desenvolvimento com Docker':

Após instalar o docker e docker-compose, estando na pasta raiz do projeto, execute:

```sh
docker-compose up
```

Para se certificar que os seus containers subiram corretamente, todos os containers deve estar com o status `UP`, execute:

```sh
docker-compose ps -a
```

Para acessar o container da aplicação, execute:

```sh
docker-compose run --rm web bash
```

Para derrubar e subir a instância do docker novamente, execute:

```sh
docker-compose down && docker-compose up
```

🚀 :clap: Para visualizar o sistema basta acessar no navegador no endereço: [localhost:3000](http://localhost:3000/)

# Referências utilizadas

[1° React Getting Started](https://create-react-app.dev/docs/getting-started/)

[2° Here’s How You Can Use Docker With React ](https://medium.com/better-programming/heres-how-you-can-use-docker-with-create-react-app-3ee3a972b04e)

[3° Create React App + Docker — multi-stage build example](https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f)

[4° Awesome Compose](https://github.com/docker/awesome-compose)

[5° How To Create A Multi-Page Website With React In 5 Minutes](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/)

[6° React-Bootstrap: a fusão entre o React e o Bootstrap](https://medium.com/code-prestige/react-bootstrap-a-fus%C3%A3o-entre-o-react-e-o-bootstrap-48e8bd318359)

[7° Instalando e gerenciando várias versões do Node.js com NVM](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm/)

[8° react-router-dom](https://reactrouter.com/web/guides/quick-start)