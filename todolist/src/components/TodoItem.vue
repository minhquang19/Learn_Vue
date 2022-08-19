<template>
    <li v-if="!completed" class="item" :class="{ completed: completed }">
        <input  @click="markCompleted(id)" type="checkbox">
        <form v-if="isEdit" @submit.prevent="editTodo">
            <input type="text" v-model="title">
            <button class="btn-edit">Edit</button>
        </form>
         <h1 v-else >{{ title }}</h1>
        <div  v-if="!isEdit" class="action">
            <button class="btn" @click="showFormEdit">
                <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="btn" @click="remove(id)">
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
                'isEdit' : false,
            };
        },
        methods: {
            remove(id) {
                this.$emit('remove', id);
            },
            markCompleted(id) {
                this.completed = !this.completed;
                this.$emit('markCompleted', id);
            },
            showFormEdit() {
                this.isEdit = !this.isEdit;
            },
            editTodo() {
                this.$emit('editTodo', this.id, this.title);
                this.isEdit = false;
            }
        }
    }
</script>
<style scoped>
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background-color: yellow;
    }
    .item div:first-child {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .btn-edit {
        background-color: #f763ad;
        color: white;
        margin-left: 5px;
        padding: 8px;
        border: none;
    }
    .btn {
        width: 20px;
        border: none;
        background: white;
        background-color: yellow;
    }
    .completed {
        background: #ffe6ff;
        color: black;
    }
    .completed .btn {
        background : #ffe6ff;   
    }
</style>