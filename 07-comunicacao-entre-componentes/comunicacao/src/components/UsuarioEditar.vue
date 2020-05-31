<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuario: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
// Event Bus (evento de barramentos)
import barramento from "../barramento";

export default {
    props: {
        idade: {
            type: Number,
            default: 0
        }
    },
    methods: {
        alterarIdade() {
            this.idade += 5
            barramento.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>

<!--
    no componente filho, dentro de "export defaut", voce passa as propriedades que a TAG ira receber no componente pai
-->