<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>

<!--		Transições/Animações com CSS -->
		<h3>Com CSS</h3>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<hr>
		<hr>
		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<hr>
		<hr>
		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<hr>
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<hr>
		<hr>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>

<!--		Transições/Animações com JavaScript -->

		<hr>
		<hr>
		<hr>
		<hr>
		<h3>Com Javascript</h3>
		<b-button variant="success" class="mb-4" @click="exibir2 = !exibir2">Alternar</b-button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div class="caixa" v-if="exibir2"></div>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Uma mensagem de informação para o usuario',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0
		}
	},
	methods: {
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		// afterEnter(el) {
		// 	console.log('afterEnter')
		// },
		// enterCancelled(el) {
		// 	console.log('enterCancelled')
		// },
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		// afterLeave(el) {
		// 	console.log('afterLeave')
		// },
		// leaveCancelled(el) {
		// 	console.log('leaveCancelled')
		// }
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

	.caixa {
		height: 100px;
		width: 300px;
		margin: 30px auto;
		background-color: lightgreen;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}

	@keyframes slide-in {
		from { transform: translateY(40px); }
		to { transform: translateY(0); }
	}

	@keyframes slide-out {
		from { transform: translateY(0); }
		to { transform: translateY(40px); }
	}

	.slide-enter-active {
		animation: slide-in 1s ease;
		transition: opacity 1s;
	}

	.slide-leave-active {
		animation: slide-out 1s ease;
		transition: opacity 1s;
	}

	.slide-enter, .slide-leave-to {
		opacity: 0;
	}
</style>