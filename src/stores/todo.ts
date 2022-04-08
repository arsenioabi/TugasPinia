import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                title: 'Puasa full 1 bulan',
                completed: false
            },
            {
                title: 'Bagi-bagi takjil',
                completed: false
            },
        ],
        newTodo: '',
    }),
    actions: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                completed: false
            });
            this.newTodo = '';
        },
    },
});