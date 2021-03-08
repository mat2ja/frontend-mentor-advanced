<template>
	<base-card
		class="mt-5 mb-6 md:mt-8 p-0 text-lg divide-y-2 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
	>
		<ul
			class="list-none divide-y-2 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
		>
			<TodoItem
				v-for="todo in todos"
				:key="todo.id"
				:id="todo.id"
				:content="todo.content"
				:done="todo.done"
				@toggle-todo="toggleTodo"
				@delete-todo="deleteTodo"
			/>
		</ul>

		<TodoControls
			:count="count"
			@clear-completed="$emit('clear-completed')"
		></TodoControls>
	</base-card>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoControls from './TodoControls.vue';

export default {
	props: ['todos', 'count'],
	emits: ['toggle-todo', 'clear-completed'],
	components: {
		TodoItem,
		TodoControls,
	},
	methods: {
		toggleTodo(todoId) {
			this.$emit('toggle-todo', todoId);
		},
		deleteTodo(todoId) {
			this.$emit('delete-todo', todoId);
		},
	},
};
</script>