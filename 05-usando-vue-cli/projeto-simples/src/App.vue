<template>
  <div id="app">
    {{ titulo }}
    <br>
    <button @click="titulo += ' #'">Alterar</button>
  </div>
</template>

<script>
  export default {
    // Pode ter watch, computed, data, methods

    data: function () {
      return {
        titulo: 'Teste Data usando Vue JS'
      }
    }
  }
</script>

<style>
  #app {
    background-color: #42b983;
    color: #ffffff;
    font-weight: bolder;
  }
</style>