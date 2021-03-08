<template>
	<base-card class="mt-5 mb-6 md:mt-8 p-0 text-lg">
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
			/>
		</ul>
	</base-card>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
	props: ['todos'],
	emits: ['toggle-todo'],
	components: {
		TodoItem,
	},
	methods: {
		toggleTodo(todoId) {
			this.$emit('toggle-todo', todoId);
		},
	},
};
</script>