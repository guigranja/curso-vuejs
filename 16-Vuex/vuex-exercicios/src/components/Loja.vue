<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            sequencia: 1
        }
    },
    methods: {
        //Formas de chamar a action que fara o commit para a mutation
        // Primeiro parametro é o namespace definido
        ...mapActions('carrinho', ['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // Enviando um novo produto para o array produtos no $store
            // this.$store.state.produtos.push(produto)

            //Formas de chamar a mutation
            // this.$store.commit('adicionarProduto', produto)

            // this.$store.dispatch('adicionarProduto', produto)
            this.adicionarProduto(produto)

            // Usando Arquivos Separados. Sem usar modulos
            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
