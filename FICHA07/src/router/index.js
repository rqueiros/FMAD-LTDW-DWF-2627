import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import WorkshopsView from '../views/WorkshopsView.vue'
import ContactosView from '../views/ContactosView.vue'
import WorkshopView from '../views/WorkshopView.vue'
import ResumoWorkshop from '../views/ResumoWorkshop.vue'
import ProgramaWorkshop from '../views/ProgramaWorkshop.vue'
import FormadoresWorkshop from '../views/FormadoresWorkshop.vue'
import EdicoesView from '../views/EdicoesView.vue'
import PesquisaView from '../views/PesquisaView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import PainelView from '../views/PainelView.vue'
import MenuPainel from '../views/MenuPainel.vue'
import NaoEncontradoView from '../views/NaoEncontradoView.vue'
import LoginView from '../views/LoginView.vue'
import InscricaoView from '../views/InscricaoView.vue'
import AdministracaoView from '../views/AdministracaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: InicioView, meta: { title: 'Início' } },
    { path: '/workshops', alias: '/oferta', name: 'workshops', component: WorkshopsView, meta: { title: 'Catálogo' } },
    { path: '/contactos', name: 'contactos', component: ContactosView, meta: { title: 'Contactos' } },
    {
      path: '/workshops/:id',
      component: WorkshopView,
      meta: { title: 'Workshop' },
      // Caminhos sem / são relativos ao pai. O caminho vazio é o filho por omissão.
      // O RouterView de App apresenta WorkshopView; o de WorkshopView apresenta o filho.
      children: [
        { path: '', name: 'workshop-resumo', component: ResumoWorkshop },
        { path: 'programa', name: 'workshop-programa', component: ProgramaWorkshop },
        { path: 'formadores', name: 'workshop-formadores', component: FormadoresWorkshop },
      ],
    },
    { path: '/edicoes/:ano(\\d+)', name: 'edicoes', component: EdicoesView },
    { path: '/pesquisa/:termo?', name: 'pesquisa', component: PesquisaView },
    { path: '/categorias/:segmentos+', name: 'categorias', component: CategoriasView },
    // Exercício 3: /edicoes/2026 corresponde, ano = '2026'.
    // /edicoes/abc não corresponde a edições; termina na página não encontrada.
    // /pesquisa corresponde, termo = ''; /pesquisa/vue corresponde, termo = 'vue'.
    // /categorias/web/vue corresponde, segmentos = ['web', 'vue'].
    {
      path: '/painel', name: 'painel',
      // components preenche vistas com nome no mesmo nível.
      // children define níveis de navegação dentro do RouterView do componente pai.
      components: { default: PainelView, lateral: MenuPainel },
      meta: { title: 'Painel' },
    },
    { path: '/catalogo', redirect: { name: 'workshops' } },
    // Exercício 7: /catalogo termina em /workshops; /oferta mantém /oferta.
    // /nao-existe e /zona/pagina mantêm o URL e apresentam NaoEncontradoView.
    // /workshops/99 corresponde ao detalhe, mas o workshop não existe nos dados.
    { path: '/login', name: 'login', component: LoginView, meta: { title: 'Entrar' } },
    { path: '/inscricao', name: 'inscricao', component: InscricaoView, meta: { requiresAuth: true, title: 'Inscrição' } },
    {
      path: '/administracao', name: 'administracao', component: AdministracaoView,
      meta: { title: 'Administração' },
      beforeEnter() {
        if (sessionStorage.getItem('perfil') !== 'admin') {
          window.alert('Acesso reservado ao perfil admin.')
          return false
        }
        return true
      },
    },
    { path: '/:pathMatch(.*)*', name: 'nao-encontrado', component: NaoEncontradoView, meta: { title: 'Página não encontrada' } },
  ],
})

router.beforeEach((to) => {
  // Login é público: o redirecionamento não provoca um ciclo.
  if (to.meta.requiresAuth && sessionStorage.getItem('autenticado') !== 'true') {
    return { name: 'login' }
  }
  return true
})

router.afterEach((to, from, failure) => {
  // Uma navegação cancelada não deve alterar o título da página atual.
  if (!failure) document.title = to.meta.title || 'Ficha07'
})

export default router
