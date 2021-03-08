<template>
 <base-card>
	<TodoItem isNewTodo>
		<input
			type="text"
			placeholder="Create a new todo..."
			class="push-down-2 focus:outline-none flex-1 bg-transparent placeholder-my-gray-400 dark:placeholder-dark-grayish-blue-300 pr-8"
			v-model.trim="currentTodo"
			@keydown.enter="addNewTodo"
		/>
	</TodoItem>
    </base-card>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
	components: {
		TodoItem,
	},
	emits: ['add-todo'],
	data() {
		return {
			currentTodo: '',
		};
	},
	methods: {
		addNewTodo() {
			console.log('adding new todo in NewTodo.vue');
			this.$emit('add-todo', {
				id: new Date().toLocaleDateString,
				content: this.currentTodo,
				done: false,
			});
			this.currentTodo = '';
		},
	},
};
</script>