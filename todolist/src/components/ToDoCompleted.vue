<template>
    <div class="div">
        <slot name="title"></slot>      
        <div v-for="todo in todoProp" :key="todo.id">
            <slot :todoItem="todo">
            </slot>
        </div>
        
    </div>
</template>
<script>
    export default {
    props: [
        'todoProp',
    ],
    }
</script>
<style scoped>
    .div{
        margin: 0 auto;
         max-width: 700px;
    }
    .title{
        margin: 20px 0px;
    }
</style>