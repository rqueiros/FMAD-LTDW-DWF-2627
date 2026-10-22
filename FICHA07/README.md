# Ficha 07 — Vue Router

Resolução cumulativa dos oito exercícios com Vue 3, Vue Router 4 e Options API. Os componentes com lógica usam `data`, `computed`, `watch`, `methods` e guardas de componente, sem Composition API. As páginas apenas de apresentação usam somente `template`.

## Executar

Usar Node.js 22.18+ (série 22) ou 24.12+.

```sh
npm install
npm run dev
```

Abrir o endereço indicado pelo Vite. Para compilar: `npm run build`. Para servir a compilação localmente: `npm run preview`.

Não é necessário servidor de API nem base de dados. As dependências são instaladas localmente pelo utilizador; `node_modules` não faz parte desta entrega. O Vite usa polling para funcionar na unidade sincronizada pCloud.

## Organização

- `src/main.js`: criação da aplicação e registo do router.
- `src/App.vue`: menu permanente, vista principal e vista com nome `lateral`.
- `src/router/index.js`: rotas, nomes, aliases, redirecionamentos, metadados e guardas globais.
- `src/data/workshops.js`: os dois workshops do enunciado.
- `src/views`: páginas e vistas filhas do detalhe.
- `src/style.css`: apresentação simples e adaptável.

## Verificar os exercícios

| Exercício | Percurso e resultado esperado |
| --- | --- |
| 1 | Alternar entre `/`, `/workshops` e `/contactos`; usar Anterior/Seguinte. O menu permanece e os links não recarregam o documento. |
| 2 | Abrir `/workshops/1` e clicar em Workshop 2. O título e as vagas mudam; a consola mostra o novo id. `/workshops/99` apresenta “Workshop não encontrado”. |
| 3 | `/edicoes/2026` recebe `ano = '2026'`; `/edicoes/abc` não corresponde a edições. `/pesquisa` aceita termo vazio; `/pesquisa/vue` recebe `'vue'`. `/categorias/web/vue` recebe `['web', 'vue']`. |
| 4 | `/workshops/2/programa` mostra o menu geral, o título Vue Router e três tópicos; `/workshops/2` mostra o resumo por omissão. Os formadores apresentam dois nomes. |
| 5 | No catálogo, abrir id 2; um id inexistente apresenta erro. Testar início → catálogo → detalhe → Substituir por início → Anterior: regressa ao catálogo. “Voltar” usa `go(-1)`. |
| 6 | `/painel` apresenta a contagem 2 e o menu lateral. `/contactos` apresenta só a vista principal. |
| 7 | `/catalogo` muda o URL para `/workshops`; `/oferta` mantém o URL. `/nao-existe`, `/zona/pagina` e `/edicoes/abc` mostram o caminho pedido na página não encontrada. |
| 8 | Sem sessão, Inscrição abre Login. Entrar abre o formulário. Editar e tentar sair permite cancelar sem perder o texto; Guardar permite sair sem confirmação. Sair termina a sessão e regressa ao início. O título do separador acompanha a rota; nas rotas de teste sem título usa “Ficha07”. |

Os comentários pedidos nos exercícios encontram-se em `App.vue`, `router/index.js` e `WorkshopView.vue`.

## Perfil de administração

Por omissão, `/administracao` é bloqueada pelo `beforeEnter`. Depois de testar a recusa, executar na consola do navegador e voltar a clicar no link Administração:

```js
sessionStorage.setItem('perfil', 'admin')
```

Para repor os testes sem sessão nem perfil:

```js
sessionStorage.removeItem('autenticado')
sessionStorage.removeItem('perfil')
```

A autenticação e o perfil são simulações para estudar navegação. Guardar apenas assinala o formulário como guardado; não existe persistência da inscrição. O botão Sair só remove a sessão depois de a navegação ser aceite, preservando-a se a confirmação for cancelada.

Com `createWebHistory`, um alojamento de produção deve devolver `index.html` para os caminhos da SPA. O servidor de desenvolvimento Vite já permite abrir diretamente estes endereços.

Referências: [Guardas de navegação](https://router.vuejs.org/guide/advanced/navigation-guards.html) e [Sintaxe de correspondência](https://router.vuejs.org/guide/essentials/route-matching-syntax.html).
