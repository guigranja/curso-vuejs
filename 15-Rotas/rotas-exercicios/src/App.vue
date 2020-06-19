<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"></router-view>
<!--		Vai carregar os componentes registrado. Pega o path-->
		<router-view />
	</div>
</template>

<script>

export default {

}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>