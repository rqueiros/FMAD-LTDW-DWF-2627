# Ficha 09 · Introdução ao Pinia

Projeto independente em Vue 3 Options API. O ponto de entrada regista o Pinia e cada componente acede à sua store através de `mapStores`. O estado dura até recarregar a página.

## Executar

Na pasta FICHA09, com Node.js 22.18+ da série 22 ou 24.12+ e npm:

```sh
npm ci
npm run dev
```

Abra o endereço indicado pelo Vite. Execute `npm test` para testar as stores e `npm run build` para compilar a aplicação.

## Experimentar os exercícios

1. **Contador** — partindo de zero, decremente até −1 e incremente para regressar a zero.
2. **Tarefas** — adicione duas tarefas e conclua a segunda. Verifique que aparece uma concluída e uma pendente. Volte a marcar a segunda como pendente e remova a primeira. Os getters filtram as duas listas e contam as tarefas. A contagem de concluídas usa o getter da lista de concluídas.
3. **Carrinho** — adicione dois cadernos e um lápis. O total deve ser 7,75 €. Remova um caderno e confirme o total de 4,25 €. Cada unidade tem um identificador próprio. Os preços são guardados em cêntimos e apresentados em euros.
