import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => ({ cartItems: [], nextId: 1 }),
  getters: {
    total: state => state.cartItems.reduce((sum, item) => sum + item.price, 0),
  },
  actions: {
    addItem({ name, price }) {
      this.cartItems.push({ id: this.nextId++, name, price })
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
    },
  },
})
