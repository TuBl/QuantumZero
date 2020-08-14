<template>
	<div class="input-container">
		<label v-if="label" class="input-container__label">{{ label }}</label>
		<input
			:type="type"
			:value="value"
			@input="updateValue"
			v-bind="$attrs"
			:class="{ error: error }"
			v-on="listeners"
		/>
	</div>
</template>

<script>
	export default {
		inheritAttrs: false,
		props: {
			value: [String, Number],
			label: {
				type: String,
				default: "",
			},
			type: String,
			error: Boolean,
		},
		methods: {
			updateValue(event) {
				this.$emit("input", event.target.value);
			},
		},
		computed: {
			listeners() {
				return {
					...this.$listeners,
					input: this.updateValue,
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	.input-container {
		position: relative;
		width: 100%;
		padding: 5em;
		padding-left: 0em;
		label {
			position: absolute;
			color: #fe519e;
			font-size: 2em;
			top: -0.2em;
		}
		input {
			width: 100%;
			height: 5em;
			font-size: 1.2rem;
			border-radius: 1%;
			border: 0px;
			padding-left: 2em;
		}
	}
	@media only screen and (min-width: 3440px) {
		.input-container {
			position: relative;
			width: 100%;
			padding: 5em;
			margin-top: 2em;
			padding-left: 0em;
			label {
				position: absolute;
				color: #fe519e;
				font-size: 3em;
				top: -0.2em;
			}
			input {
				width: 100%;
				height: 5em;
				font-size: 2.2rem;
				border-radius: 1%;
				border: 0px;
				padding-left: 2em;
			}
		}
	}
	@media only screen and (max-width: 460px) {
		.input-container {
			position: relative;
			width: 100%;
			padding: 5em;
			padding-left: 0em;
			label {
				position: absolute;
				color: #fe519e;
				font-size: 1.5rem;
				top: 1em;
			}
			input {
				width: 100%;
				height: 5em;
				font-size: 1.2rem;
				border-radius: 1%;
				border: 0px;
				padding-left: 2em;
			}
		}
	}
</style>
