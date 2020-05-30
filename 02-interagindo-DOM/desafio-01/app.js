new Vue({
    el: '#desafio',
    data: {
        meuNome: 'Guilherme Granja',
        idade: 26,
        link: 'https://mcdn.wallpapersafari.com/medium/53/93/UabhFz.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        randomico() {
            return Math.floor(Math.random() * 10)
        }
    },
})