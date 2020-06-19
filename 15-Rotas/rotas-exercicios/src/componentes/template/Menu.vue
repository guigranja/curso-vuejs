<template>
    <nav class="menu">
        <ul>
            <!--        Cria um link. Faz a requisição por baixo dos panos-->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Inicio</a></router-link>

            <router-link to="/usuario/" tag="li" active-class="active">
                <a>Usuario</a></router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>

<!--
    exact -> vai deixar o link ativo se o path for exato
-->