<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu />
<!--		Vai carregar os componentes registrado. Pega o path-->
		<transition enter-active-class="animated rubberBand" leave-active-class="animated rollOut" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
import Menu from "./componentes/template/Menu";

export default {
	components: { Menu }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>