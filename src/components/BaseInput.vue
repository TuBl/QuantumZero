<template>
	<div class="input-container">
		<label v-if="label" class="input-container__label">{{ label }}</label>
		<input type="text" @input="updateValue" />
	</div>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: "",
			},
		},
		methods: {
			updateValue(event) {
				this.$emit("input", event.target.value);
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
			border-radius: 1%;
			border: 0px;
		}
	}
</style>
