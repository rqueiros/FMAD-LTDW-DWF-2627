# Ciclo de vida — respostas

1. A ordem é beforeCreate → created → beforeMount → mounted. A propriedade message ainda não está disponível em beforeCreate. Está disponível em created, beforeMount e mounted.

2. O elemento do template está no DOM em mounted. Em created os dados já foram inicializados, mas o template ainda não foi montado. A consulta de #mensagem devolve null na criação inicial deste exemplo.

| Hook | data disponível? | DOM deste componente disponível? |
| --- | --- | --- |
| beforeCreate | Não | Não |
| created | Sim | Não |
| beforeMount | Sim | Não |
| mounted | Sim | Sim |

Quando message muda e provoca uma atualização da renderização, executam-se beforeUpdate antes de atualizar o DOM e updated depois. Os hooks de criação e montagem não voltam a executar nessa atualização. Uma alteração reativa que não afete a renderização pode não provocar estes hooks.

O enunciado escreve LifeCyecle.vue; a solução usa a grafia LifeCycle.vue de forma consistente no ficheiro e na importação.
