# docker_react

👋 Olá, Seja Bem-vindo(a) ao 'Docker React'.

## Criando a aplicação React para 'Multi-Page':

1. Instalar o [NVM](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm/) para versão mais atual possível

2. Criar a aplicação 'frontend'(ou um nome que desejar):
```sh
npx create-react-app frontend
```

3. 'Dockerizar' a aplicação criada, para isso crie um arquivo docker-compose.yml na raiz do projeto com o seguinte conteúdo:
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

4. Verifique a versão instalada do seu node no terminal, neste caso a versão é a 15.0.1 que será utilizada no passo 5° para configurar o Dockerfile:
```sh
node --version
```

5. Na pasta 'frontend' você deve criar o Dockerfile com o seguinte conteúdo:
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

8. Instalar o [React-Boostrap](https://medium.com/code-prestige/react-bootstrap-a-fus%C3%A3o-entre-o-react-e-o-bootstrap-48e8bd318359)no seu container:
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

## 🐳 Modo Desenvolvimento com Docker

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

Para acessar a instância do banco de dados, execute:

```sh
docker exec-it [nome do db] bash
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

[6° Ecoleta](https://github.com/diiegopaiivam/ecoleta)

[7° React-Bootstrap: a fusão entre o React e o Bootstrap](https://medium.com/code-prestige/react-bootstrap-a-fus%C3%A3o-entre-o-react-e-o-bootstrap-48e8bd318359)

[8° Instalando e gerenciando várias versões do Node.js com NVM](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm/)