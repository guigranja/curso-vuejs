<template>
    <div class="contadores">
        <app-contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>
    import Contador from "./Contador"; // Componente registrado de forma local
    export default {
        components: {
            'app-contador': Contador
        }
    }
</script>

<style>

</style>