# React native template

Repositório contendo "boilerplate" para projetos de react native.

Para instalar, ao invés de rodar o comando

```sh
react-native --init MyApp
```

execute

```sh
react-native init MyApp --template adornodev-rn-template
```

Ao realizar o comando acima, será criado um projeto react-native com as seguintes dependências:

- react-navigation 5.X
- styled-components
- axios
- immer
- react-native-vector-icons

A seguinte estrutura de pastas será inserida em seu projeto:

```
- src/
  - components/
  - config/
  - pages/
    - Main/
      - index.js
      - styles.js
  - services/
    - api.js
  - styles/
    colors.js
  - index.js
  - routes.js

- .eslintrc.js
- .prettierrc.js
```
