<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p><strong>Codigo:</strong> {{ id }}</p>
<!--        Recebendo os dados passados na query (/rota? ...)-->
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua:</strong> {{ $route.query.lang }}</p>
    </div>
</template>

<script>
    export default {
        name: "UsuarioEditar",
        props: ['id']
    }
</script>

<style scoped>

</style>