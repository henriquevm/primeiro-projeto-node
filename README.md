# primeiro-projeto-node
Projeto Curso Rocketseat (GoBarber)

Passos para a criação do projeto:
1 - yarn init -y => iniciando um projeto usando o yarn que ja cria o arquivo package.json
2 - yarn add express => adicona ao projeto o micro-framework
3 - yarn add typescript -D
4 - yarn tsc --init => cria confirmação do typescrip

Habilitar em tsconfig.json com as seguintes configurações:

    "outDir": "./dist",
    "rootDir": "./src",

e executar: yarn tsc

5 - yarn add @types/express -D
6 - yarn add ts-node-dev


--transpileOnly -> deixa mais rapido pq não é verificado o erro
--ignore-watch node_modules -> ignora a pasta node_modules ao copilar

##Padrões de projeto com ESLint, EditorConfig e Prettier

Adicionar o .editorconfig:
root = true
//--//
[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
//--//


7 - yarn add eslint@6.8.0 -D
8 - yarn eslint --init
8.1 - To check syntax, find problems and enforce code style
8.2 - Javascript modules (import/export)
8.3 - None of these
8.4 - Yes
8.5 - Node
8.6 - Use a popular style guide
8.7 - Airbnb
8.8 - JSON
8.9 - No -> para usar o yarn no lugar do npm
8.10 - yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D -> instalar usando o yarn

9 - Acrescentar em .eslintrc.json
//--//
"extends": [
  "airbnb-base",
  "plugin:@typescript-eslint/recommended"
],
//--//

10 - yarn add eslint-import-resolver-typescript

11 - Em "rules" no .eslintrc.json:
//--//
"settings": {
  "import/resolver": {
    "typescript": {}
  },
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      "ts": "never"
    }
  ]
}

12 - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

13 - Em "extends" no .eslintrc.json:

"prettier/@typescript-eslint",
"plugin:prettier/recommended"


14 - Em "plugins" no .eslintrc.json:

"prettier"


15 - Em "rules" no .eslintrc.json:
"prettier/prettier": "error"

16 - Criar prettier.config.js na raiz com:

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
	arrowParens: 'avoid',
}

17 - Configurando debug em launch.json:

"configurations": [
  {
    "type": "node",
    "request": "attach",
    "protocol": "inspector",
    "restart": true,
    "name": "Debug",
    "skipFiles": [
      "<node_internals>/**"
    ],
    "outFiles": [
      "${workspaceFolder}/**/*.js"
    ]
  }
]




