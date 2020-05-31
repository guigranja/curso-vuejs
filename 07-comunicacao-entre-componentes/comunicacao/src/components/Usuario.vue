<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é: {{ idade }}</p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- Comunicação direta entre componentes -->
            <!-- @mudouNome é um evento indireto, vindo do filho Usuarioindo.vue -->
            <app-usuario-info
                    :nome="nome"
                    :idade="idade"
                    @nomeMudou="nome = $event"
                    :reiniciarFn="reinicarNome"
            />
            <app-usuario-editar
                :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro Silva',
            idade: 26
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Guilherme Granja'
        },
        // Para função callback
        reinicarNome() {
            this.nome = "Pedro Silva"
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>

<!--
    Componente pai recebe a propriedade esperada, passando o valor dela
    Nome das propriedades são Case Sensitive

    Comunicação indireta com callback

-->