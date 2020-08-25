<template>
	<section>
		<img :src="require(`@/assets/${imgName}`)" :alt="text" />
		<h3>{{ text }}</h3>
	</section>
</template>

<script>
	export default {
		name: "Product",
		props: {
			imgName: [String],
			text: {
				type: String,
				default: "",
			},
		},
	};
</script>

<style lang="scss" scoped>
	img {
		height: 420px;
		width: 480px;
		border-radius: 2%;
		box-shadow: 0px 0px 10px #fffffe;
	}
	h3 {
		padding-top: 1em;
		padding-left: 0.5em;
		color: #fffffe;
	}
	@media only screen and (min-width: 3440px) {
		img {
			height: 100%;
			width: 60%;
			border-radius: 2%;
			box-shadow: 0px 0px 10px #fffffe;
		}
		h3 {
			font-size: 5rem;
			padding-top: 1em;
			padding-left: 0.5em;
		}
	}
	@media only screen and(max-width: 768px) {
		h3 {
			font-size: 1.3rem;
		}
		img {
			height: 240px;
			width: 240px;
			border-radius: 2%;
			box-shadow: 0px 0px 10px #fffffe;
		}
	}
	@media only screen and(max-width: 414px) {
		h3 {
			font-size: 1.3rem;
		}
		img {
			height: 240px;
			width: 240px;
			border-radius: 2%;
			box-shadow: 0px 0px 10px #fffffe;
		}
	}
	@media only screen and(max-width: 360px) {
		h3 {
			font-size: 1.1rem;
		}
		img {
			height: 240px;
			width: 240px;
			border-radius: 2%;
			box-shadow: 0px 0px 10px #fffffe;
		}
	}
</style>
