<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const todoStore = useTodoStore();

const { addTodo } = todoStore;

const { todos, newTodo } = storeToRefs(todoStore);
</script>

<template>
    <div class="container mt-4">
        <center><h1>ToDo List</h1></center>

        <div class="">
            <input type="text" class="form-control" v-model="newTodo" />
            <button class="btn btn-success" @click="addTodo">Add Task</button>
        </div>

        <ul>
            <li v-for="todo in todos" :key="todo.title">
                <input type="checkbox" v-model="todo.completed" />
                
                <span :class="{done: todo.completed}">
                {{ todo.title }}
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.done{
    text-decoration: line-through;
}
</style>