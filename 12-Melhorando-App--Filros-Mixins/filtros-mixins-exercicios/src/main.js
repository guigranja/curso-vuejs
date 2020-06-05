import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Passando um filtro globalmente
Vue.filter('inverter', function (valor) {
	return valor.split('').reverse().join('')
})

// Mixin GLOBAL (caso ESPICIAL)
Vue.mixin({
	data() {
		return {
			global: 'Estou no Mixin Global'
		}
	},
	created() {
		console.log('Created - Mixin GLOBAL !!')
	}
})

new Vue({
	render: h => h(App),
	// Piorando as coisas ... GLOBAL
	created() {
		console.log('Created - Instancia VUE !!')
	}
}).$mount('#app')

// Pode usar Mixin Globais normalmente quando tem uma ferramenta que monitora a app,
// Um plugin que roda na aplicação .. Porem nunca se usa normalmente