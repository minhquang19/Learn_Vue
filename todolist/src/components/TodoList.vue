<template>
	<div id="app">
		<section class="banner"></section>
		<div class="main">
			<div class="addnew">
			<input type="text" class="todo-input" placeholder="What to do" v-model="newTodo" @keyup.enter="add">
		</div>
		<ul class="todo_list">
			<todo-item 
				@remove="remove"
				@editTodo="editTodo"
				@markCompleted="markCompleted"
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo">
			</todo-item>
		</ul>
		</div>
	</div>

	<ToDoCompleted :todo-prop="todos">
        <template v-slot:title>
			<h1 class="title">Completed List</h1>
        </template>
        <template #default="todoItem" >
          <h4 v-if="todoItem.todoItem.completed"  class="completed"> {{ todoItem.todoItem.title }}</h4>
        </template>
    </ToDoCompleted>

	<ToDoCompleted :todo-prop="todos">
        <template v-slot:title>
			<h1 class="title">InProgress List</h1>
        </template>
        <template #default="todoItem" >
          <h4 v-if="!todoItem.todoItem.completed"  class="uncompleted"> {{ todoItem.todoItem.title }}</h4>
        </template>
    </ToDoCompleted>
</template>
<script>
	import TodoItem from './TodoItem.vue';
	import ToDoCompleted from './ToDoCompleted.vue';
	export default {
		components: {
			TodoItem,
			ToDoCompleted
		},
		data() {
			return {
				newTodo: '',
				idForTodo: 3,
				todos: [],
			}
		},
		methods: {
			add() {
				this.todos.unshift({
					id: this.idForTodo,
					title: this.newTodo,
					completed: false,
				})
				this.newTodo = '';
				this.idForTodo++;
			},
			remove(id) {
				const index = this.todos.findIndex((item) => item.id == id)
				this.todos.splice(index, 1)
			},
			editTodo(id, title) {
				const index = this.todos.findIndex((item) => item.id == id)
				this.todos[index].title = title;
				
			},
			markCompleted(id) {
				const index = this.todos.findIndex((item) => item.id == id)
				this.todos[index].completed = !this.todos[index].completed;
			}
		},
	};
</script>
<style scoped>
	.todo_list{
		border: 1px solid #ccc;
		margin-top: 40px;
		width: 100%;
	}
	#app {
		position: relative;
		margin: 0 auto;
		width: 700px;
		min-height: 500px;
		border : 1px solid #ccc;
	}
	ul li:first-child { 
		border: none;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.banner {
		width: 100%;
		height: 100px;
		background-color: yellow;
		border : 1px solid #ccc;
		height: 100px;
		padding: 10px;
		text-align: left;
	}
	.todo-input {
		padding: 20px;
		border : 1px solid #ccc;
		width: 100%;
	}
	.main {
		position: absolute;
		left: 0;
		right: 0;
		top: 12%;
		width: 400px;
		margin: 0 auto;
		background: white;
	}
	.completed{
	background-color: green;
	color: white;
	padding: 20px;
	border-radius: 5px;
	margin-bottom: 10px;
	text-align: center;
	}
	.uncompleted{
	background-color: yellow;
	color: black;
	padding: 20px;
	border-radius: 5px;
	margin-bottom: 10px;
	text-align: center;
	}
	.title{
		margin: 30px;
	}
</style>
