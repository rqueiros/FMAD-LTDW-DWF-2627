
import { defineStore } from 'pinia'

const intervalos = {}

export const useModelsStore = defineStore('models', {
  state: () => ({
    modelos: [
      { id: 1, nome: 'GPT', versao: '5', descricao: 'OpenAI', tokens: 100, threshold: 30 },
      { id: 2, nome: 'Claude', versao: '4', descricao: 'Anthropic', tokens: 80, threshold: 20 }
    ],
    logs: []
  }),

  getters: {
    totalModelos: state => state.modelos.length,
    totalTokens: state => state.modelos.reduce((total, m) => total + m.tokens, 0)
  },

  actions: {
    log(tipo, mensagem) {
      this.logs.push({ tipo, mensagem })
    },

    adicionar(modelo) {
      if (!modelo.nome) throw new Error('Nome obrigatório')

      modelo.id = Math.max(0, ...this.modelos.map(m => m.id)) + 1
      this.modelos.push({ ...modelo })
      this.log('sucesso', 'Modelo adicionado')
    },

    editar(id, nome) {
      const modelo = this.modelos.find(m => m.id === id)
      if (!modelo) throw new Error('Modelo não encontrado')
      if (!nome) throw new Error('Nome obrigatório')

      modelo.nome = nome
      this.log('sucesso', 'Modelo editado')
    },

    eliminar(id) {
      const modelo = this.modelos.find(m => m.id === id)
      if (!modelo) throw new Error('Modelo não encontrado')

      this.parar(id)
      this.modelos = this.modelos.filter(m => m.id !== id)
      this.log('sucesso', 'Modelo eliminado')
    },

    iniciar(id) {
      const modelo = this.modelos.find(m => m.id === id)
      if (!modelo) throw new Error('Modelo não encontrado')
      if (intervalos[id]) throw new Error('Consumo já iniciado')
      if (modelo.tokens === 0) throw new Error('Sem tokens')

      intervalos[id] = setInterval(() => {
        const anteriores = modelo.tokens
        modelo.tokens = Math.max(0, modelo.tokens - 5)

        if (anteriores > modelo.threshold && modelo.tokens <= modelo.threshold) {
          this.log('aviso', `${modelo.nome}: limite atingido`)
        }

        if (modelo.tokens === 0) {
          this.parar(id)
          this.log('erro', `${modelo.nome}: tokens esgotados`)
        }
      }, 1000)
    },

    parar(id) {
      clearInterval(intervalos[id])
      delete intervalos[id]
    }
  }
})
