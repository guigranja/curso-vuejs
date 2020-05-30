<template>
  <v-app>
    <Menu /> <!-- Definimos o componente Menu.vue -->
    <Toolbar /> <!-- Definimos o componente Toolbar.vue -->
    <v-content>
      <Carousel /> <!-- Definimos o componente Carousel.vue -->
    </v-content>
    <Footer />  <!-- Definimos o componente Footer.vue -->
  </v-app>
</template>

<script>
import Footer from "./components/template/Footer";
import Carousel from "./components/widgets/Carousel";
import Toolbar from "./components/template/Toolbar";
import Menu from "./components/template/Menu";

export default {
  components: {
    Footer,
    Carousel,
    Toolbar,
    Menu
  }
}
</script>

<!--
  Pode referenciar o componente com camel case e ifen na TAG.
    Exemplo: componentes -> appExemplo .... tag -> <app-exemplo />

  Pode usar o nome do componente sem ter que dar um pre-nome e na TAG usar o mesmo nome do componente
  Exemplo: components -> Footer ..... TAG -> <Footer />

  A melhor forma é a de cima
-->