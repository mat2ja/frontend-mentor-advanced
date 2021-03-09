<template>
	<li
		class="flex cursor-pointer select-none text-my-gray-500 dark:text-dark-grayish-blue-100"
		@mouseover="todoIsHovered = true"
		@mouseleave="todoIsHovered = false"
	>
		<label
			class="flex items-center py-4 pl-6 pr-5 md:py-5 md:pl-7 md:pr-6 cursor-pointer group"
			@click="toggleCheckbox"
		>
			<div
				:class="checkboxStyles"
				class="relative flex-shrink-0 inline-block w-5 h-5 md:w-6 md:h-6 overflow-hidden rounded-full checkbox group-hover:border-my-purple"
			>
				<CheckmarkIcon v-if="checked && !isNewTodo" />
			</div>
		</label>
		<div class="flex flex-grow" :class="itemCheckedStyles">
			<span
				v-if="!isNewTodo"
				class="flex items-center flex-grow push-down-1 md:push-down-2 py-2 pr-6"
				@click="toggleCheckbox"
			>
				{{ content }}
			</span>
			<slot v-else></slot>
		</div>
		<span
			v-show="!isNewTodo && todoIsHovered"
			class="flex items-center flex-shrink-0 px-5 ml-auto group"
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
			todoIsHovered: false,
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
