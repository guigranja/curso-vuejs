<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
<!--		<p v-destaque="'lightblue'">Usando diretiva personalizada</p>-->
		<p v-destaque.atrasar="cor">Usando diretiva personalizada</p>

<!--		v-teste:argumento="valor" -> se for string colocar '' -->
		<p v-destaque:fundo.atrasar="'#6d5c7d'">FUNDO</p>

<!--		Diretiva LOCAL-->
		<p v-destaque-local:fundo.atrasar="cor2">FUNDO</p>
		<p v-destaque-local.atrasar="'#a33434'">Usando diretiva personalizada</p>

<!--		Usando multiplos modificadores-->
		<p v-destaque-local:fundo.atrasar.alternar="cor" style="color: #FFFFFF">FUNDO</p>
		<p v-destaque-local.atrasar="'#a33434'">Usando diretiva personalizada</p>

<!--		Passando Valores mais complexos para as diretivas -->
		<p v-destaque-local:fundo.atrasar.alternar="cor" style="color: #FFFFFF">FUNDO</p>
		<p v-destaque-local.atrasar="'#a33434'">Usando diretiva personalizada</p>

	</div>
</template>

<script>
export default {
	// Criando diretivas LOCAIS
	directives: {
		'destaque-local': {
			bind(el, binding, vNode) {

				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if (binding.modifiers['atrasar']) atraso = 3000

				let cor1 = binding.value
				let cor3 = 'purple'
				let corAtual = cor1

				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor3 : cor1
							aplicarCor(corAtual)
						}, 1000)
					} else {
						aplicarCor(binding.value)
					}
				}, atraso)

				setTimeout(() => {
					setInterval(() => {
						if (binding.modifiers['alternar']) {
							corAtual = corAtual === cor1 ? cor3 : cor1
							aplicarCor(corAtual)
						} else {
							aplicarCor(binding.value)
						}
					}, 1500)
					aplicarCor(binding.value)
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: '#0015a5',
			cor2: '#90fc7d'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
