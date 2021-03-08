<template>
	<slot v-if="!hidden"></slot>
</template>

<script>
export default {
	props: {
		hidden: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
};
</script>

<style scoped>
</style>

