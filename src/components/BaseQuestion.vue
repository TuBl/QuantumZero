<template>
	<div v-if="options" class="question-container">
		<h1 v-if="question">{{ question }}</h1>
		<div
			class="options"
			v-for="(option, index) in options"
			:key="`option-${index}`"
		>
			<div class="option" @click="addToAnswers(option)">{{ option }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		inheritAttrs: false,
		props: {
			question: [String],
			options: {
				type: Array,
			},
		},
		methods: {
			addToAnswers(option) {
				this.$emit("update-answers", {
					question: this.question,
					option: option,
				});
			},
		},
		// },
		// computed: {
		// 	listeners() {
		// 		return {
		// 			...this.$listeners,
		// 			input: this.updateValue,
		// 		};
		// 	},
		// },
	};
</script>

<style lang="scss" scoped>
	h1 {
		color: white;
		margin-bottom: 2em;
		font-size: 4rem;
	}
	.options {
		display: flex;
		justify-content: center;
		padding: 1em;
		.option {
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			height: 50px;
			width: 20%;
			border-radius: 2%;
			background: #fe519e;
		}

		.option:hover {
			color: #fffffe;
			transform: scale(0.98);
		}
	}
</style>
