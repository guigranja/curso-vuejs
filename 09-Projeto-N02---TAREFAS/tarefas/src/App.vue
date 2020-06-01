<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid
			:tasks="tasks"
			@taskDeleted="deleteTask"
			@taskStateChanged="toggleTaskState"
		/>
	</div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask";
import TasksProgress from "./components/TasksProgress";

export default {
	components: { TaskGrid, NewTask, TasksProgress },
	data() {
		return {
			tasks: [
				{ name: 'Lavar a Louça', pending: false },
				{ name: 'Comprar blusa', pending: true }
			]
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			const name = task.name
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length === 0

			if (reallyNew) {
				Swal.fire({
					icon: 'success',
					title: 'Perfeito!',
					html: 'A tarefa <strong><u>' + name + '</u></strong> foi adicionada com sucesso'
				}).then((result) => {
					this.tasks.push({
						name: task.name,
						pending: task.pending || true
					})
				})
			} else {
				Swal.fire({
					icon: 'warning',
					title: 'Ops ...',
					html: 'Tarefa <strong><u>' + task.name + '</u></strong> já foi adicionada a sua lista.',
					footer: '<a href="https://vuejs.org/" target="_blank">Porque isso aconteceu ?</a>'
				})
			}
		},
		deleteTask(i, task) {
			Swal.fire({
				icon: 'warning',
				title: 'Ola ..',
				html: 'Deseja realmente excluir a tarefa <strong><u>' + task.name + '</u></strong> ?' ,
				confirmButtonText: 'Excluir',
				confirmButtonColor: '#db1717'
			}).then((result) => {
				if (result.value) {
					this.tasks.splice(i, 1)
				}
			})
		},
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)

		this.tasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
