<template>
	<li
		class="flex text-lg cursor-pointer text-my-gray-500 dark:text-dark-grayish-blue-100 select-none"
	>
		<label
			class="flex items-center pl-5 pr-6 pt-4 pb-4 cursor-pointer"
			@click="toggleCheckbox"
		>
			<div
				:class="[labelCheckedStyles, { checked: checked }]"
				class="relative w-6 h-6 rounded-full inline-block flex-shrink-0 overflow-hidden"
			>
				<svg
					v-if="checked"
					class="center w-4 h-4 text-my-gray-200"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					></path>
				</svg>
				<input
					type="checkbox"
					@input="toggleCheckbox"
					class="hidden"
					:checked="checked"
				/>
			</div>
		</label>
		<div class="flex-grow flex" :class="itemCheckedStyles">
			<span
				v-if="!isNewTodo"
				class="push-down-1 flex items-center flex-grow"
				@click="toggleCheckbox"
			>
				{{ content }}
			</span>
			<slot v-else></slot>
		</div>
		<span
			v-if="!isNewTodo"
			class="ml-auto flex items-center pl-5 pr-5 flex-shrink-0"
		>
			<svg
				class="w-6 h-6 text-my-gray-300 dark:text-dark-grayish-blue-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path>
			</svg>
		</span>
	</li>
</template>

<script>
export default {
	props: {
		isNewTodo: {
			type: Boolean,
			default: false,
		},
		content: {
			type: String,
			required: false,
		},
		isMarkedDone: {
			type: Boolean,
			required: false,
		},
	},
	data() {
		return {
			checked: this.isMarkedDone,
		};
	},
	methods: {
		toggleCheckbox() {
			console.log('checked');
			this.checked = !this.checked;
		},
	},
	computed: {
		itemCheckedStyles() {
			if (this.checked) {
				return [
					'line-through',
					'text-my-gray-300',
					'dark:text-dark-grayish-blue-400',
				];
			}
			return {};
		},
		labelCheckedStyles() {
			if (this.checked) {
				return ['border-transparent'];
			}
			return [
				'border-2',
				'border-my-gray-300',
				'dark:border-dark-grayish-blue-500',
			];
		},
	},
};
</script>

<style scoped>
label div.checked::before {
	content: '';
	position: absolute;
	top: -1px;
	left: -1px;
	right: -1px;
	bottom: -1px;
	background: red;
	background: linear-gradient(
		to bottom right,
		hsl(192, 100%, 67%),
		hsl(280, 87%, 65%)
	);
}

svg.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>