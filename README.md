# FMAD-LTDW-DWF-2627

Repositório público com as resoluções das fichas práticas de **Desenvolvimento Web Front-End**, da Licenciatura em Tecnologias e Desenvolvimento Web da FMAD, no ano letivo **2026/2027**.

As soluções utilizam **Vue 3 e Options API**. Cada pasta contém um projeto independente, com o código necessário e um README com instruções específicas. A ficha 07 utiliza também **Vue Router 4**.

## Fichas disponíveis

| Ficha | Tema | Conteúdos principais |
| --- | --- | --- |
| [Ficha 01](FICHA01/README.md) | Introdução ao Vue.js | Componentes, `data()`, interpolação e reatividade. |
| [Ficha 02](FICHA02/README.md) | Ciclo de vida | Hooks de criação, montagem e atualização; acesso ao DOM. Inclui [respostas às questões](FICHA02/RESPOSTAS.md). |
| [Ficha 03](FICHA03/README.md) | Sintaxe de templates | Expressões, `v-html`, `v-bind`, `v-if`, `v-on`, modificadores e shorthand. |
| [Ficha 04](FICHA04/README.md) | Renderização condicional e por lista | `v-if`, `v-else-if`, `v-else`, `v-show`, `v-for` e filtragem com `computed`. |
| [Ficha 05](FICHA05/README.md) | Eventos e formulários | Eventos, teclado e rato, `v-model`, validação, referências ao DOM e inscrições. |
| [Ficha 06](FICHA06/README.md) | Componentes | Props, validação, eventos personalizados, comunicação entre pai e filho e slots. |
| [Ficha 07](FICHA07/README.md) | Vue Router | Rotas dinâmicas e aninhadas, navegação programática, vistas com nome, redirecionamentos e guardas. |

## Executar uma ficha

Requer **Node.js 22.18+ da série 22 ou 24.12+** e npm.

Na raiz do repositório, escolher a pasta pretendida. Por exemplo:

```sh
cd FICHA01
npm install
npm run dev
```

Abrir no navegador o endereço indicado pelo Vite. Para executar outra ficha, repetir os comandos na respetiva pasta.

Nas fichas 01 a 06, o seletor da aplicação permite alternar entre exercícios independentes. A mudança de exercício repõe o estado. A ficha 07 reúne os exercícios numa aplicação de workshops com navegação entre páginas.

## Compilar e pré-visualizar

Dentro da pasta da ficha:

```sh
npm run build
npm run preview
```

O primeiro comando gera a versão de produção em `dist`; o segundo permite pré-visualizá-la localmente.

## Notas para as aulas

- `node_modules` e `dist` estão excluídos do controlo de versões. Instalar as dependências em cada projeto antes da primeira execução.
- Não é necessário servidor de API nem base de dados. Os dados são locais; a autenticação da ficha 07 é simulada.
- Usar o Vue DevTools para inspecionar e alterar o estado dos componentes e a consola do navegador para observar eventos e hooks.
- A configuração do Vite utiliza polling para evitar atualizações repetidas em unidades sincronizadas, como a pCloud.
- Algumas imagens da ficha 03 são obtidas de um serviço externo e requerem ligação à Internet.
- Ao alojar a ficha 07 em produção, configurar o servidor para devolver `index.html` nos caminhos da SPA, pois utiliza `createWebHistory`.
