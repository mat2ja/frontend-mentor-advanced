<template>
	<ul
		class="list-none divide-y-2 divide-my-gray-200 dark:divide-dark-grayish-blue-500"
	>
		<TodoItem
			v-for="todo in todos"
			:key="todo.id"
			:content="todo.content"
		/>
	</ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
	props: ['todos'],
	components: {
		TodoItem,
	},
};
</script>