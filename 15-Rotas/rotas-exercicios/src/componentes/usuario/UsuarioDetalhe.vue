<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <p><strong>Codigo:</strong> {{ id }}</p>
<!--        :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id }, query: { completo: true, lang: 'pt' } }">
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "UsuarioDetalhe",
        // Pegando os parametros via props
        props: ['id']
    }
</script>

<style scoped>

</style>