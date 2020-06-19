import Vue from 'vue'
import Router from "vue-router";
import Inicio from "./componentes/Inicio";
import Menu from "./componentes/template/Menu";
import Usuario from "./componentes/usuario/Usuario";
import UsuarioLista from "./componentes/usuario/UsuarioLista";
import UsuarioDetalhe from "./componentes/usuario/UsuarioDetalhe";
import UsuarioEditar from "./componentes/usuario/UsuarioEditar";

// Registrando o plugin router. Dentro dos componentes temos como acessar as rotas
Vue.use(Router)

// Objeto criado apartir da função construtora
// Passamos para o objeto, o objeto de configuração que definimos todas as configs
export default new Router({
    mode: 'history',
    // Cada objeto dentro de routes vai mapear uma rota
    routes: [{
        // Deifinimos o PATH e o componente que será carregado
        path: '/',
        // component: Inicio,
        // Dando um nome para o <router-view>
        components: {
            default: Inicio,
            menu: Menu
        },
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
            { path: ':id', component: UsuarioDetalhe, props: true },
            // Dando um nome para rota.
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }]
})

/*
    * # Modo HASH e HISTORY
		-> HASH (/#/usuario) =>
		-> HISTORY (/usuario) =>


* */