<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario ... <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuario: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
// Event Bus
import barramento from "../barramento";

export default {
    // Comunicação direta entre componentes
    // Passa valor nome, que sera esperado na TAG, dentro de Usuario.vue
    // Validando  as propriedades
    props: {
      nome: {
          type: String,
          // required: true,
          // Passando valor padrão caso não seja informado
          default: 'Anonimo'
          // Usando uma função como default
          // default: function () {
          //     return Array(1).fill('convidado-'+Math.floor(Math.random() * 100)).join(',')
          // }
      },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        // Usando props no Componente filho
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        // Comunicação Indireta com Eventos Personalizados
        reiniciarNome() {
            // const old = this.nome
            this.nome = 'Pedro Silva'
            // Disparando evento
            this.$emit('nomeMudou', this.nome)
            // Pode passar como objetos
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     old
            // })
        }
    },
    // Metodo de ciclo de vida. Vamos escutar o evento que foi emitido
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>

<!--
    Exemplo abaixo, diz que alem de a propriedade ter que ser do tipo String, ela é requirida para a app funcionar
    props: {
      nome: {
        type: String,
        required: true
      }
    }
-->