<template>
	<base-card
		class="mt-5 mb-6 md:mt-8 p-0 text-lg divide-y-2 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
	>
		<ul
			class="list-none divide-y-2 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
		>
			<TodoItem
				v-for="todo in filteredTodos"
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
		>
			<template #filters>
				<TodoFilter @set-filter="setFilter" /> </template
		></TodoControls>
	</base-card>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoControls from './TodoControls.vue';
import TodoFilter from './TodoFilter.vue';

export default {
	props: ['todos', 'count'],
	emits: ['toggle-todo', 'clear-completed'],
	components: {
		TodoItem,
		TodoControls,
		TodoFilter,
	},
	data() {
		return {
			currentFilter: 'all',
		};
	},
	methods: {
		toggleTodo(todoId) {
			this.$emit('toggle-todo', todoId);
		},
		deleteTodo(todoId) {
			this.$emit('delete-todo', todoId);
		},
		setFilter(selectedFilter) {
			this.currentFilter = selectedFilter;
		},
	},
	computed: {
		filteredTodos() {
			const filter = this.currentFilter;
			if (filter === 'active') {
				return this.todos.filter((todo) => !todo.done);
			} else if (filter === 'completed') {
				return this.todos.filter((todo) => todo.done);
			} else {
				return this.todos;
			}
		},
	},
};
</script>