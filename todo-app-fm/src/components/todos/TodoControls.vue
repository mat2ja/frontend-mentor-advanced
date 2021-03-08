<template>
	<div
		class="flex items-center justify-between text-sm text-my-gray-400 dark:text-dark-grayish-blue-300 p-4"
	>
		<p class="flex-1">{{ count || 0 }} items left</p>
		<slot name="filters"></slot>
		<button
			@click="$emit('clear-completed')"
			class="hover:text-my-gray-500 focus:outline-none flex-1 text-right"
		>
			Clear completed
		</button>
	</div>
</template>

<script>
export default {
	props: ['count'],
	emits: ['clear-completed'],
};
</script>