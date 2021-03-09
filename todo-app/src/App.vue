<template>
	<BaseHero :bg-image="currentImage" />
	<div class="min-h-screen bg-my-gray-100 dark:bg-dark-blue-800 overflow-hidden">
		<div class="relative max-w-2xl px-5 mx-auto">
			<TheHeader />
			<TodoApp />
		</div>
	</div>
</template>

<script>
import BaseHero from './components/layout/BaseHero.vue';
import TheHeader from './components/layout/TheHeader.vue';
import TodoApp from './components/todos/TodoApp.vue';

export default {
	components: {
		BaseHero,
		TheHeader,
		TodoApp,
	},
	data() {
		return {
			background: {
				mobileLight: '../assets/img/bg-mobile-light.jpg',
				mobileDark: '../assets/img/bg-mobile-dark.jpg',
				desktopLight: '../assets/img/bg-desktop-light.jpg',
				desktopDark: '../assets/img/bg-desktop-dark.jpg',
			},
		};
	},
};
</script>

<style>
.push-down-1 {
	transform: translateY(1px);
}

.push-down-2 {
	transform: translateY(2px);
}

.push-down-4 {
	transform: translateY(4px);
}
</style>