<template>
	<base-card class="p-6">
		<div
			class="flex items-center justify-between text-sm text-dark-grayish-blue-300"
		>
			<p>{{ count || 0 }} items left</p>
			<button @click="$emit('clear-completed')">Clear completed</button>
		</div>
	</base-card>
</template>

<script>
export default {
	props: ['count'],
	emits: ['clear-completed'],
};
</script>