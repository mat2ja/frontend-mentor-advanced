<template>
	<base-card
		class="p-0 mt-5 mb-5 divide-y-2 md:mt-8 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
	>
		<p
			v-if="filteredTodos.length === 0"
			class="p-5 text-2xl font-bold text-center push-down-1 text-my-gray-500 dark:text-dark-grayish-blue-200"
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
				@toggle-todo="$emit('toggle-todo', $event)"
				@delete-todo="$emit('delete-todo', $event)"
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

	<base-card class="flex justify-around p-4 md:p-5 md:hidden">
		<TodoFilter @set-filter="setFilter" />
	</base-card>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoControls from './TodoControls.vue';
import TodoFilter from './TodoFilter.vue';

export default {
	props: ['todos', 'count'],
	emits: ['toggle-todo', 'delete-todo', 'clear-completed'],
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