<template>
	<li
		class="flex cursor-pointer select-none text-my-gray-500 dark:text-dark-grayish-blue-100"
	>
		<label
			class="flex items-center p-4 cursor-pointer md:p-5"
			@click="toggleCheckbox"
		>
			<div
				:class="checkboxStyles"
				class="relative flex-shrink-0 inline-block w-6 h-6 overflow-hidden rounded-full checkbox"
			>
				<CheckmarkIcon v-if="checked && !isNewTodo" />
			</div>
		</label>
		<div class="flex flex-grow" :class="itemCheckedStyles">
			<span
				v-if="!isNewTodo"
				class="flex items-center flex-grow push-down-1"
				@click="toggleCheckbox"
			>
				{{ content }}
			</span>
			<slot v-else></slot>
		</div>
		<span
			v-if="!isNewTodo"
			class="flex items-center flex-shrink-0 pl-5 pr-5 ml-auto"
			@click="$emit('delete-todo', id)"
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
		isNewTodo: { type: Boolean, default: false },
		done: { type: Boolean, required: false },
		content: { type: String, required: false },
		id: { type: String, required: false },
	},
	emits: ['toggle-todo', 'delete-todo'],
	data() {
		return {
			checked: this.done,
		};
	},
	methods: {
		toggleCheckbox() {
			if (!this.isNewTodo) {
				this.checked = !this.checked;
				this.$emit('toggle-todo', this.id);
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