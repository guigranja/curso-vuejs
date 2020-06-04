import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Criando diretiva simples - GLOBAL
Vue.directive('destaque', {
	bind(el, binding, vNode) {

		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)

		// el.style.backgroundColor = 'lightgreen'

		// Passando um valor personalizado
		// el.style.backgroundColor = binding.value
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
