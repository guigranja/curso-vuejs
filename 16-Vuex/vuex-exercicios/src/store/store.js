import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";

import * as getters from './getters'

Vue.use(Vuex)

// Criando a função construtora
export default new Vuex.Store({
    // Usando Arquivos Separados. Sem usar modulos
    state: {
        nome: 'Guilherme',
        sobrenome: 'Granja'
    },
    getters,
    // Acessando atraves dos modulos
    modules: { carrinho, parametros }
})

// Mutations são para alterar o estado
// Actions são para colocar regras para Mutations. Colocamos as chamadas para o back-end, requisições ajax e etc