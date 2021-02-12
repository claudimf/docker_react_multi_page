# docker_react

👋 Olá, Seja Bem-vindo(a) ao 'Docker React'.

1. Atualizar npm, rodar no terminal:
```sh
npm uninstall -g create-react-app && npm i -g npm@latest && sudo npm cache clean -f
```

2. Criar app:
```sh
npx create-react-app app
```

3. Construir projeto:
```sh
docker-compose build
```
4. Instalar boostrap

```sh
npm install react-bootstrap bootstrap
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