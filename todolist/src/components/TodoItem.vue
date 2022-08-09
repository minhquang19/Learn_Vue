<template>
    <li class="item" :class="{ completed: completed }">
        <input  @click="markCompleted" type="checkbox">
		<p >{{ title }}</p>
        <div class="action">
            <button class="action-btn">
                <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="action-btn" @click="remove(id)">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </li>
</template>
<script>
    export default {
        name: 'todo-item',
        props: {
            todo: {
                type: Object,
                require: true,
            }
        },
        data() {
            return {
                'id': this.todo.id,
                'title': this.todo.title,
                'completed': this.todo.completed,
            };
        },
        methods: {
            remove(id) {
                this.$emit('remove', id)
            },
            markCompleted() {
                this.completed = !this.completed;
            }
        }
    }
</script>
<style>
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
    .action button {
        width: 20px;
        border: none;
        background: white;
        color: #f763ad;
    }
    .completed {
        background: #ffe6ff;
        color: black;
    }
    .completed .action-btn {
        background : #ffe6ff;
    }
</style>