<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>

<!--		Passando as mascaras para o CPF-->
		<p>{{ cpf | cpfMascara | inverter}}</p>

		<hr>
<!--		Passando as mascaras para o CPF de Forma Global (dentro do main.js)-->
		<p>{{ cpf | inverter}}</p>

		<hr>
<!--		Filtro com v-bind-->
		<label>
			<input type="text" :value="cpf | cpfMascara">
		</label>

		<hr>
<!--	Replicando os dados	-->
		<Frutas />

		<hr>
<!--	Passando via Mixin -->
		<ul>
			<li v-for="fruta in frutas" :key="fruta">
				{{ fruta }}
			</li>
		</ul>
		<input type="text" v-model="fruta" @keydown.enter="add">

		<hr>
<!--		Mixin-->
		<p>{{ usuarioLogado }}</p>
	</div>
</template>

<script>
import Frutas from "./components/Frutas";
import frutaMixin from "./frutaMixin";
import usuarioMixin from "./usuarioMixin";

export default {
	components: { Frutas },
	// Faz uma mesclagem o que dentro do mixin com o componente
	mixins: [frutaMixin, usuarioMixin],
	// Passando as mascaras para o CPF de forma Local
	filters: {
		cpfMascara(valor) {
			const arr = valor.split('')
			// na 3 posição, não elimina nada, e adiciona '.'
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')

			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '00143575180'
		}
	},
	created() {
		console.log('Created - App.vue !!')
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
		font-size: 1.5rem;
	}

	input {
		font-size: 1.5rem;
	}
</style>

<!--
	Apesar que dentro do mixin tem um atributo data, é criado uma instancia especifica de cada
	Não substitui data()
	Porem, caso tenha um dado com o mesmo nome, mantem o data() do compoenente e não do mixins, mostrando o que esta em
	componente
-->