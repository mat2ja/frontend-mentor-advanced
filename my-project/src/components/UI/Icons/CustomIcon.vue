<template>
	<div>
		<slot v-if="!hidden"></slot>
	</div>
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
div {
	position: relative;
}
</style>

