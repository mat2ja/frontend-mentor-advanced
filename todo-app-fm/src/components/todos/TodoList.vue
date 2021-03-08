<template>
	<base-card
		class="mt-5 mb-5 md:mt-8 p-0 divide-y-2 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
	>
		<p
			v-if="filteredTodos.length === 0"
			class="push-down-1 font-bold text-2xl text-my-gray-500 dark:text-dark-grayish-blue-200 text-center p-5"
		>
			Empty 🍂
		</p>
		<ul
			v-else
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
				<TodoFilter
					@set-filter="setFilter"
					class="hidden md:block"
				/> </template
		></TodoControls>
	</base-card>

	<base-card class="p-5 flex justify-around md:hidden">
		<TodoFilter @set-filter="setFilter" />
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