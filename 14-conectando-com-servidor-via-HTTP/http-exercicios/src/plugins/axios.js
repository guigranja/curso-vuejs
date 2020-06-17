import Vue from 'vue'
import axios from 'axios'

// URL base para acessar o backend ou banco de dados
axios.defaults.baseURL = 'https://curso-vue-51f11.firebaseio.com/'

// Adicionando HEADERS globais
axios.defaults.headers.common['Authorization'] = 'Guilherme8593'

// Axios de forma global
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios

        //Interceptando uma requisição
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config["method"])
            return config
        }, error => Promise.reject(error))

        // Interceptando uma resposta
        // Vue.prototype.$http.interceptors.response.use(res => {
        //     const array = []
        //     for(let chave in res.data) {
        //         array.push({ id: chave, ...res.data[chave] }) // ... -> operador spread
        //     }
        //
        //     res.data = array
        //     return res
        // }, error => Promise.reject(error))
    }
})


// Criando varias instancias do AXIOS
// Vue.use({
//     install(Vue) {
//         // Cria a primeira instancia
//         Vue.prototype.$http = axios.create({
//             baseURL: 'https://curso-vue-51f11.firebaseio.com/'
//         })
//
//         // Pode criar a segunda instancia
//     }
// })