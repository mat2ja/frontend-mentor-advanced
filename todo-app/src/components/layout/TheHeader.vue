<template>
	<header
		class="flex justify-between py-7 md:py-11text-3xl md:text-4xl text-my-gray-100"
	>
		<span class="font-bold push-down-4 tracking-most-widest">TODO</span>
		<button class="btn" @click="toggleTheme">
			<transition mode="out-in">
				<SunIcon v-if="isDark" />
				<MoonIcon v-else />
			</transition>
		</button>
	</header>
</template>

<script>
import MoonIcon from '../UI/Icons/MoonIcon.vue';
import SunIcon from '../UI/Icons/SunIcon.vue';
export default {
	components: {
		MoonIcon,
		SunIcon,
	},
	data() {
		return {
			isDark: false,
		};
	},
	methods: {
		toggleTheme() {
			this.isDark = !this.isDark;
		},
	},
	watch: {
		isDark(value) {
			if (value) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		},
	},
};
</script>

<style scoped>
.v-enter-from {
	opacity: 0;
	transform: translateY(-20px);
}

.v-leave-to {
	opacity: 0;
	transform: translateY(20px);
}

.v-enter-active {
	transition: all 300ms ease-out;
}

.v-leave-active {
	transition: all 300ms ease-in;
}
</style>