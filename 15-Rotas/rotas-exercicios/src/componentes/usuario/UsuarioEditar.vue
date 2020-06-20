<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p><strong>Codigo:</strong> {{ id }}</p>
<!--        Recebendo os dados passados na query (/rota? ...)-->
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua:</strong> {{ $route.query.lang }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsuarioEditar",
        props: ['id'],
        data() {
            return {
                confirmou: false
            }
        },
        // Fazendo alguma tratativa, antes de sair da pagina
        beforeRouteLeave(to, from, next) {
            if (this.confirmou) {
                next()
            } else {
                if (confirm('tem certeza?')) {
                    next()
                } else {
                    next(false)
                }
            }
        }
    }
</script>

<style scoped>
#rodape {
    margin-top: 1000px;;
}
</style>