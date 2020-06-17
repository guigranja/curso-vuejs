<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o seu nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o seu email"></b-form-input>
			</b-form-group>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<br>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="mt-2">Obter usuarios</b-button>
		</b-card>

		<br>

		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>ID: </strong> {{ id + 1 }} <br>
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>Email: </strong> {{ usuario.email }} <br>
				<b-button variant="warning" size="md" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="md" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limparInputs() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			Swal.fire({
				icon: 'warning',
				title: 'Voce tem certeza ?',
				text: 'Deseja realmente excluir o usuario da sua base de dados?',
				showCancelButton: true,
				confirmButtonText: 'Sim, Deletar !',
				confirmButtonColor: '#62ce53',
				cancelButtonText: 'Não, pelo amor de Deus, não !',
				cancelButtonColor: '#d92828',
				reverseButtons: true
			}).then((result) => {
				if (result.value) {
					this.$http.delete(`/usuarios/${id}.json`).then(() => {
						Swal.fire(
								'Deletado !',
								'Usuario Deletado com sucesso',
								'success'
						).then(() => this.limparInputs())

						this.obterUsuarios()
					}).catch(() => {
						Swal.fire(
								'Problemas !!!',
								`Tivemos um problema para excluir o usuario. Contactar o suporte !`,
								'error'
						)
					})
				} else if (result.dismiss === Swal.DismissReason.cancel) {
					Swal.fire(
							'Cancelado',
							'Usuario perdoado, não será deletado !',
							'error'
					).then(() => this.limparInputs())
				}
			})
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(resp => {
				if (metodo === 'patch') {
					Swal.fire({
						icon: 'info',
						text: 'Dados do usuario foram alterados !',
						confirmButtonColor: '#0069d9',
						confirmButtonText: 'Ok'
					}).then((result) => this.limparInputs())
				} else {
					Swal.fire({
						icon: 'success',
						title: 'Parabens',
						text: `Usuario ${this.usuario.nome} cadastrado com sucessso !`,
						confirmButtonColor: '#29ac22',
						confirmButtonText: 'Ok, Valeu !'
					}).then((result) => this.limparInputs())
				}

				this.obterUsuarios()
			})
		},
		//Metodo get. Se não passar nada, por padrão é uma requisição get
		obterUsuarios() {
			this.$http.get('usuarios.json').then(resp => {
				this.usuarios = resp.data
			})
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Guilherme',
	// 		email: 'guilherme.marcal@soluti.com.br'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
