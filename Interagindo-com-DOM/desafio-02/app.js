new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Estou alertando');
        },
        alterarValor(e) {
            this.valor = event.target.value
        }
    }
})