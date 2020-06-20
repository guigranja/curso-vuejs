<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <p><strong>Codigo:</strong> {{ id }}</p>
<!--        :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario
                     :to="{ name: 'editarUsuario', params: { id },
                            query: { completo: true, lang: 'pt' },
                            hash: '#rodape'}">
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "UsuarioDetalhe",
        // Pegando os parametros via props
        props: ['id'],
        // Protegendo as rotas antes de acessar
        beforeRouteEnter(to, from, next) {
            // Podemos verificar se o usuario esta logado antes de acessar
            const autenticado = true
            autenticado ? next() : next(false)
        }
    }
</script>

<style scoped>

</style>