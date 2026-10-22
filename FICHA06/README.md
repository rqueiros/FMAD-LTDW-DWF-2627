# Ficha 06

Resolução em Vue 3 com Options API. Escolher o exercício no seletor da aplicação. Cada exercício é um componente independente em `src/components`; ao trocar de exercício, o estado anterior é reposto. As soluções incluem os desafios do enunciado.

## Executar

Requer Node.js 22.18+ (série 22) ou 24.12+.

```sh
npm install
npm run dev
```

Abrir o endereço indicado pelo Vite. Compilar com `npm run build` e testar a compilação com `npm run preview`. Não é necessário servidor de API nem base de dados. `node_modules` é criado pela instalação e não faz parte da entrega. A configuração Vite usa polling para unidades sincronizadas.

## Exercícios

- 1. Estado independente
- 2. Props estáticas e dinâmicas
- 3. Validação de props
- 4. Eventos do filho para o pai
- 5. Arrays e payload
- 6. Slot normal
- 7. Slots com nome
- 8. Aplicação de workshops

Nos exercícios que pedem alterações através do Vue DevTools, selecionar o componente do exercício e editar as propriedades em `data`. Nos exercícios de eventos e ciclo de vida, consultar também a consola do navegador.

## Verificações práticas

- Ex1: aumentar duas vezes o primeiro contador produz 2, 0, 0. Repor o segundo não modifica o primeiro.
- Ex2: editar a mochila e aumentar o seu preço não altera o cartão Caderno, que mantém 4,56 €.
- Ex3: as duas instâncias finais são válidas. Os comentários em `Ex3.vue` indicam como testar cada aviso separadamente. O primeiro cartão usa € por omissão e o segundo USD.
- Ex4: dois cliques em + produzem quantidade 3 e total 37,50 €. Ao chegar a 1, o botão - fica desativado. O pai também impede quantidades inferiores a 1.
- Ex5: marcar o workshop 2 e removê-lo deixa dois workshops e zero favoritos. Remover todos mostra a mensagem de lista vazia.
- Ex6: Estado apresenta o slot por omissão. O botão do terceiro painel atualiza o contador definido no pai.
- Ex7: a segunda caixa apresenta “Sem título” e “Sem ações”. Selecionar na primeira atualiza a mensagem do pai.
- Ex8: inscrever nos workshops 1 e 3 cria duas inscrições. Repetir um id não duplica a inscrição. Cancelar 1 reativa apenas o respetivo cartão; Limpar inscrições reativa todos.

Os componentes filhos estão diretamente em `src/components` para tornar as importações e a reutilização fáceis de acompanhar. As alterações de produtos, quantidades, favoritos e inscrições são feitas nos respetivos pais.
