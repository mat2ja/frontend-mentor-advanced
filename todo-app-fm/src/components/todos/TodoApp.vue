<template>
	<NewTodo />

	<base-card
		v-if="todosCount == 0"
		class="mt-5 mb-6 md:mt-8 text-lg pl-5 pr-5 pt-12 pb-12 text-center"
	>
		<p
			class="push-down-1 font-bold text-2xl text-my-gray-500 dark:text-dark-grayish-blue-200"
		>
			Add some todos! 🥳
		</p>
	</base-card>
	<TodoList
		v-else
		:todos="todos"
		:count="todosLeftCount"
		@toggle-todo="toggleTodoState"
		@delete-todo="deleteTodo"
		@clear-completed="clearCompletedTodos"
	/>
</template>

<script>
import { nanoid } from 'nanoid';
import NewTodo from './NewTodo.vue';
import TodoList from './TodoList.vue';

export default {
	components: {
		NewTodo,
		TodoList,
	},
	provide() {
		return {
			addNewTodo: this.addNewTodo,
			uncompletedTodos: this.uncompletedTodos,
		};
	},
	data() {
		return {
			todos: [
				{
					id: nanoid(8),
					content: 'Jog around the part 3x',
					done: false,
				},
				{
					id: nanoid(8),
					content: '10 minutes meditations',
					done: true,
				},
				{
					id: nanoid(8),
					content: 'Read for 1 hour',
					done: false,
				},
				{
					id: nanoid(8),
					content: 'Pick up groceries',
					done: false,
				},
			],
			counter: 0,
		};
	},
	methods: {
		toggleTodoState(todoId) {
			const toggledTodo = this.todos.find((todo) => todo.id === todoId);
			toggledTodo.done = !toggledTodo.done;
		},
		addNewTodo(newTodo) {
			this.todos.unshift(newTodo);
		},
		deleteTodo(todoId) {
			this.todos = this.todos.filter((todo) => todo.id != todoId);
		},
		clearCompletedTodos() {
			this.todos = this.uncompletedTodos;
		},
	},
	computed: {
		todosCount() {
			return this.todos.length;
		},
		todosLeftCount() {
			return this.uncompletedTodos.length;
		},
		completedTodos() {
			return this.todos.filter((todo) => todo.done);
		},
		uncompletedTodos() {
			return this.todos.filter((todo) => !todo.done);
		},
	},
};
</script>