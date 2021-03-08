<template>
	<div
		class="flex items-center justify-between text-sm text-my-gray-400 dark:text-dark-grayish-blue-300 p-5"
	>
		<p>{{ count || 0 }} items left</p>
		<button
			@click="$emit('clear-completed')"
			class="hover:text-my-gray-500 focus:outline-none"
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