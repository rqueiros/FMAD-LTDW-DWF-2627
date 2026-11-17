import { createRouter, createWebHistory } from 'vue-router'
import { validarSessao } from '../services/estado'
import InicioView from '../views/InicioView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import DetalheView from '../views/DetalheView.vue'
import AdminView from '../views/AdminView.vue'
import NaoEncontradoView from '../views/NaoEncontradoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: InicioView, meta: { title: 'Início' } },
    { path: '/register', name: 'register', component: RegisterView, meta: { title: 'Registo' } },
    { path: '/login', name: 'login', component: LoginView, meta: { title: 'Login' } },
    { path: '/series', name: 'catalogo', component: CatalogoView, meta: { title: 'Catálogo', requiresAuth: true } },
    { path: '/series/:id', name: 'detalhe', component: DetalheView, meta: { title: 'Detalhe', requiresAuth: true } },
    { path: '/admin/series', name: 'admin', component: AdminView, meta: { title: 'Administração', requiresAuth: true, requiresAdmin: true } },
    // Um id inexistente corresponde a /series/:id; um caminho desconhecido vem aqui.
    { path: '/:pathMatch(.*)*', name: 'nao-encontrado', component: NaoEncontradoView, meta: { title: 'Página não encontrada' } },
  ],
})

router.beforeEach(to => {
  const conta = validarSessao()
  if (to.meta.requiresAuth && !conta) {
    return { name: 'login' }
  }
  if (to.meta.requiresAdmin && conta?.perfil !== 'admin') {
    return { name: 'catalogo', query: { erro: 'acesso' } }
  }
})
router.afterEach(to => { document.title = `${to.meta.title} — Ficha08` })
export default router
