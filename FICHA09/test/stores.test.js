import { beforeEach, test } from 'node:test'
import assert from 'node:assert/strict'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '../src/stores/counter.js'
import { useTodoStore } from '../src/stores/todo.js'
import { useShoppingCartStore } from '../src/stores/cart.js'

beforeEach(() => setActivePinia(createPinia()))

test('O contador permite valores negativos e incrementos', () => {
  const store = useCounterStore()
  assert.equal(store.count, 0)
  store.decrement()
  assert.equal(store.count, -1)
  store.increment()
  assert.equal(store.count, 0)
})

test('As listas e contagens acompanham cada alteração de tarefa', () => {
  const store = useTodoStore()
  store.addTodo(' ')
  store.addTodo(' Ler ')
  store.addTodo('Rever')
  const [first, second] = store.todos
  assert.equal(first.text, 'Ler')
  assert.equal(store.totalCount, 2)
  store.toggleTodo(second.id)
  assert.deepEqual(store.completedTodos, [second])
  assert.deepEqual(store.pendingTodos, [first])
  assert.equal(store.completedCount, 1)
  store.toggleTodo(second.id)
  store.removeTodo(first.id)
  assert.deepEqual(store.pendingTodos, [second])
  assert.equal(store.completedCount, 0)
  assert.equal(store.totalCount, 1)
})

test('Cada unidade tem um identificador e contribui para o total em cêntimos', () => {
  const store = useShoppingCartStore()
  const product = { name: 'Caderno', price: 350 }
  store.addItem(product)
  store.addItem(product)
  const [first, second] = store.cartItems
  assert.notEqual(first.id, second.id)
  assert.equal(store.total, 700)
  store.removeItem(first.id)
  assert.deepEqual(store.cartItems, [second])
  assert.equal(store.total, 350)
  store.removeItem(second.id)
  assert.equal(store.total, 0)
})
