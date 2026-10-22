# Ficha 05

Resolução em Vue 3 com Options API. Escolher o exercício no seletor da aplicação. Cada exercício é um componente independente em `src/components`; ao trocar de exercício, o estado anterior é reposto. As soluções incluem os desafios do enunciado.

## Executar

Requer Node.js 22.18+ (série 22) ou 24.12+.

```sh
npm install
npm run dev
```

Abrir o endereço indicado pelo Vite. Compilar com `npm run build` e testar a compilação com `npm run preview`. Não é necessário servidor de API nem base de dados. `node_modules` é criado pela instalação e não faz parte da entrega. A configuração Vite usa polling para unidades sincronizadas.

## Exercícios

- 1. Contador com eventos
- 2. Parâmetros e evento
- 3. Propagação e modificadores
- 4. Teclado e rato
- 5. Perfil com v-model
- 6. Seleções e valores dinâmicos
- 7. Modificadores de v-model
- 8. Inscrição e referências ao DOM

Nos exercícios que pedem alterações através do Vue DevTools, selecionar o componente do exercício e editar as propriedades em `data`. Nos exercícios de eventos e ciclo de vida, consultar também a consola do navegador.

## Verificações práticas

- Ex1: +5 → Aumentar → -5 → Diminuir produz 5, 6, 1, 0. Voltar a diminuir mantém zero.
- Ex2: clicar em CSS apresenta CSS, click e CSS e incrementa o total uma vez.
- Ex3: comparar as três zonas. Sem modificadores, o botão incrementa ambos os contadores; com `.stop` ou `.self`, o contador da área mantém-se. A oferta só ativa uma vez e a ligação não navega.
- Ex4: Enter copia o texto; Escape limpa. Ctrl + Shift + clique não incrementa o contador de Ctrl. O botão direito não abre o menu de contexto.
- Ex5: selecionar JavaScript e repor o perfil deixa apenas Vue selecionado.
- Ex6: escolher o segundo workshop apresenta id 2 e preço 30. Usar Ctrl/Cmd para escolher vários horários.
- Ex7: quantidade 3 e preço 12,50 produzem 37,50 €. Campos numéricos vazios, quantidade fracionária ou preço negativo mostram “Valores inválidos”. As observações atualizam ao sair do campo.
- Ex8: o email usa a validação HTML nativa. Com email válido, o método valida nome, workshop e condições por esta ordem e foca o primeiro controlo inválido. Uma inscrição guarda cópias dos dados e dos interesses; Limpar repõe o formulário e Remover elimina só o registo escolhido.
