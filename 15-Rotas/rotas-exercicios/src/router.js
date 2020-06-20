import Vue from 'vue'
import Router from "vue-router";
import Inicio from "./componentes/Inicio";
// import Usuario from "./componentes/usuario/Usuario";
// import UsuarioLista from "./componentes/usuario/UsuarioLista";
// import UsuarioDetalhe from "./componentes/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./componentes/usuario/UsuarioEditar";

// Registrando o plugin router. Dentro dos componentes temos como acessar as rotas
Vue.use(Router)

// Carregando rotas tardiamente
// Para aplicações grandes, faz sentido carregar, um menu, somente quando o usuario precisar
// Podemos juntar todos os arquivos gerado, em somente um so usando /* webpackChunkName: "usuario" */
const Usuario = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/UsuarioEditar')

// Objeto criado apartir da função construtora
// Passamos para o objeto, o objeto de configuração que definimos todas as configs
const router =  new Router({
    mode: 'history',
    // Adicionando scroll. hash (#) na pagina
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else if(to.hash) {
          return { selector: to.hash }
      } else {
          return { x: 0, y: 0 }
      }
    },
    // Cada objeto dentro de routes vai mapear uma rota
    routes: [{
        // Deifinimos o PATH e o componente que será carregado
        path: '/',
        component: Inicio,
        // Dando um nome para o <router-view>
        name: 'inicio'
    }, {
        path: '/usuario/',
        component: Usuario,
        // Todos os parametros dessa rota sera passado para props
        props: true,
        // Rotas aninhadas, Rotas Filhas
        children: [
            { path: '', component: UsuarioLista },
            // :id -> passando o parametro. Pode passar qualquer forma de parametro
            { path: ':id', component: UsuarioDetalhe, props: true,
                // Protegendo as rotas antes de acessar
                beforeEnter: (to, from, next) => {
                    const autenticado = true
                    autenticado ? next() : next(false)
                }},
            // Dando um nome para rota.
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    },{
        // Redirecionando qualquer rota errada para voltar para Inicio
        path: '*',
        redirect: '/'
    }]
})

// Protegendo as rotas. Validando antes de passar para proxima pagina.
// to -> rota de destino | from ->  rota de origem | next -> se não chamar o next, intemrrompe a navegação
router.beforeEach((to, from, next) => {
    const autenticado = true
    autenticado ? next() : next(false)
})

export default router

/*
    * # Modo HASH e HISTORY
		-> HASH (/#/usuario) =>
		-> HISTORY (/usuario) =>


* */