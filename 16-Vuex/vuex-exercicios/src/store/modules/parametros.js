export default {
//    Criando o objeto que representa o estado central que vai compartilhar as info. Gerenciado pelo Vuex
    state: {
        // Definimos para usar o two-way binding em dois componentes
        quantidade: 2,
        preco: 2.50
    },
    // faz o papel do 'setter'
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    }
}