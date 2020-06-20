export default {
    // Definindo um namespace. o namespace se chamará 'carrinho'
    namespaced:  true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // faz o papel do 'setter'
    mutations: {
        // pode definir apenas com state, e tbm passando outro dado (payload) -> pode mudar o nome, mas referencia
        // permite que passa somente um parametro opcional
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    // Lugar que vão executar regra de negocio. Chamadas no back-end
    actions: {
        adicionarProduto({ commit }, payload) {
            // Simulação de um assincronimos
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}