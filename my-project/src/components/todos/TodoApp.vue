<template>
	<base-card>
		<NewTodo @add-todo="addNewTodo" />
	</base-card>

	<base-card class="mt-5 md:mt-8">
		<TodoList :todos="todos" />
	</base-card>
</template>

<script>
import NewTodo from './NewTodo.vue';
import TodoList from './TodoList.vue';

export default {
	components: {
		NewTodo,
		TodoList,
	},
	data() {
		return {
			todos: [
				{
					id: 1,
					content: 'Jog around the part 3x',
					done: false,
				},
				{
					id: 2,
					content: '10 minutes meditations',
					done: false,
				},
				{
					id: 3,
					content: 'Read for 1 hour',
					done: false,
				},
				{
					id: 4,
					content: 'Pick up groceries',
					done: false,
				},
			],
		};
	},
	methods: {
		addNewTodo(newTodo) {
            console.log(newTodo)
			this.todos.unshift(newTodo);
		},
	},
};
</script>