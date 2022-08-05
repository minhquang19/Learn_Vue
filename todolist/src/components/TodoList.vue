<template>
	<div class="todo">
		<section class="banner"></section>
		<div class="main">
			<div class="addnew" >
				<label for="content">New Todo :</label>
				<div class="form-group">
					<input type="text" class="content" v-model="item.name" />
					<button class="btn-add" @click="add">Add</button>
				</div>
			</div>
			<ul class="list-todo">
				<li v-for="(todo, index) in todos" :key="todo.name" :class="{ done: todo.isDone }" >
					<div class="item">
						<div>
							<input  @click="todo.isDone = !todo.isDone" type="checkbox">
							<p >{{ todo.name }}</p>
						</div>
						<div>
							<button class="action-btn">
								<i class="fa-solid fa-pencil"></i>
							</button>
							<button class="action-btn" @click="remove(index)">
								<i class="fa-solid fa-trash"></i>
							</button>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			todos: [],
			item: {
				name: "",
				isDone: false,
			},
		};
	},
	methods: {
		add() {
			this.todos.unshift(this.item);
			this.item = {
				name: "",
				isDone: false,
			};
		},
		remove(index) {
			this.todos.splice(index, 1);
		},
	},
};
</script>
<style scoped>
.banner {
	width: 100%;
	height: 100px;
	background-color: #f763ad;
	border : 1px solid #ccc;
	height: 100px;
	padding: 10px;
	text-align: left;
}

.addnew{
	padding: 20px;
	border : 1px solid #ccc;
}

.todo {
	position: relative;
	margin: 0 auto;
	width: 700px;
	min-height: 500px;
	border : 1px solid #ccc;
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

.main label {
	font-weight: bold;
}

.btn-add {
	background: #f763ad;
	border: none;
	padding: 8px 15px;
	color: white;
	font-weight: bold;
}

.form-group {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
}

.form-group input {
	width: 80%;
}

.list-todo {
	border: 1px solid #ccc;
	margin-top: 40px;
	width: 100%;
}

ul li:first-child { 
	border: none;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

.item div:first-child {
	display: flex;
	align-items: center;
	gap: 10px;
}

.action-btn {
	width: 20px;
	border: none;
	background: white;
	color: #f763ad;
}

.done {
	background: #ffe6ff;
	color: black;
}

.done .action-btn {
	background : #ffe6ff;
}
</style>
