<template>
	<li
		class="flex text-lg cursor-pointer text-my-gray-500 dark:text-dark-grayish-blue-100 select-none"
	>
		<label
			class="flex items-center pl-5 pr-6 pt-5 pb-5 cursor-pointer"
			@click="toggleCheckbox"
		>
			<div
				:class="checkboxStyles"
				class="checkbox relative w-6 h-6 rounded-full inline-block flex-shrink-0 overflow-hidden"
			>
				<CheckmarkIcon :hidden="!checked || isNewTodo" />

				<input
					v-if="!isNewTodo"
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
			<CloseIcon />
		</span>
	</li>
</template>

<script>
import CloseIcon from '../UI/Icons/CloseIcon.vue';
import CheckmarkIcon from '../UI/Icons/CheckmarkIcon.vue';

export default {
	components: { CloseIcon, CheckmarkIcon },
	props: {
		isNewTodo: {
			type: Boolean,
			default: false,
		},
		content: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			checked: false,
		};
	},
	methods: {
		toggleCheckbox() {
			if (!this.isNewTodo) {
				console.log('toggled 😎🥰');
				this.checked = !this.checked;
			}
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
		checkboxStyles() {
			if (this.checked && !this.isNewTodo) {
				return ['checked', 'border-transparent'];
			}
			return [
				'border-2',
				'border-my-gray-200',
				'dark:border-dark-grayish-blue-500',
			];
		},
	},
};
</script>

<style scoped>
.checkbox.checked::before {
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
</style>