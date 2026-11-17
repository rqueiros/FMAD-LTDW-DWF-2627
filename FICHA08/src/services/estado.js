import { seriesIniciais } from '../data/series'
import { chaves, ler, guardar, novoId } from './storage'

function lista(chave) {
  const valor = ler(chave, [])
  return Array.isArray(valor) ? valor : []
}

// Não reinicializar uma coleção vazia: o admin pode ter removido todas as séries.
if (localStorage.getItem(chaves.series) === null) guardar(chaves.series, seriesIniciais)
const utilizadores = lista(chaves.utilizadores)
if (!utilizadores.some(u => u.perfil === 'admin')) {
  utilizadores.push({ id: novoId(), nome: 'Administrador', email: 'admin@ficha08.pt', palavraPasse: 'admin123', perfil: 'admin' })
  guardar(chaves.utilizadores, utilizadores)
}

// App.vue coloca este objeto em data(): o Vue trata da reatividade.
export function criarEstado() {
  return {
    series: lista(chaves.series),
    vistas: lista(chaves.vistas),
    utilizador: validarSessao(),
    mensagem: '',
  }
}

export function validarSessao() {
  // Revalidar a conta real na storage a cada navegação/operação protegida.
  const contas = lista(chaves.utilizadores)
  const id = ler(chaves.sessao, null, sessionStorage)
  const conta = contas.find(u => u.id === id) || null
  if (!conta) sessionStorage.removeItem(chaves.sessao)
  return conta
}

export function registar({ nome, email, palavraPasse }) {
  const contas = lista(chaves.utilizadores)
  email = email.trim().toLowerCase()
  if (contas.some(u => u.email.toLowerCase() === email)) throw new Error('Este email já está registado.')
  const conta = { id: novoId(), nome: nome.trim(), email, palavraPasse, perfil: 'user' }
  guardar(chaves.utilizadores, [...contas, conta])
}

export function entrar(email, palavraPasse) {
  const contas = lista(chaves.utilizadores)
  const conta = contas.find(u => u.email === email.trim().toLowerCase() && u.palavraPasse === palavraPasse)
  if (!conta) throw new Error('Email ou palavra-passe incorretos.')
  guardar(chaves.sessao, conta.id, sessionStorage)
  return conta
}

export function sair() {
  sessionStorage.removeItem(chaves.sessao)
}

function exigirUtilizador(admin = false) {
  const conta = validarSessao()
  if (!conta) throw new Error('Inicie sessão para continuar.')
  if (admin && conta.perfil !== 'admin') throw new Error('Acesso não autorizado.')
  return conta
}

export function estaVista(estado, id) {
  return estado.vistas.some(v => v.utilizadorId === estado.utilizador?.id && v.serieId === id)
}

export function marcarVista(estado, id) {
  const conta = exigirUtilizador()
  if (!estado.series.some(s => s.id === id)) throw new Error('Série não encontrada.')
  if (estaVista(estado, id)) return
  const vistas = [...estado.vistas, { utilizadorId: conta.id, serieId: id }]
  guardar(chaves.vistas, vistas)
  estado.vistas = vistas
}

export function criarSerie(estado, dados) {
  exigirUtilizador(true)
  const series = [...estado.series, { ...dados, id: novoId() }]
  guardar(chaves.series, series)
  estado.series = series
}

export function removerSerie(estado, id) {
  exigirUtilizador(true)
  const series = estado.series.filter(s => s.id !== id)
  const vistas = estado.vistas.filter(v => v.serieId !== id)
  guardar(chaves.series, series)
  guardar(chaves.vistas, vistas)
  estado.series = series
  estado.vistas = vistas
}

