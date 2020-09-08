<template>
	<div class="person__container" :class="{ lr: direction }">
		<img :src="require(`@/assets/${imgName}`)" :alt="text" />
		<h2>
			<span>{{ id }}</span>
			<p>{{ text || "" }}</p>
		</h2>
	</div>
</template>

<script>
	export default {
		inheritAttrs: false,
		props: {
			id: [Number, String],
			text: [String],
			imgName: [String],
			direction: [Boolean],
		},
	};
</script>

<style lang="scss" scoped>
	img {
		height: 100%;
		width: 100%;
	}
	.person__container {
		width: 50%;
		height: 20rem;
		align-items: center;
		display: flex;
		background: #2b2a3863;
		padding: 1em;
		border-radius: 15px;
		h2 {
			width: 100%;
			display: flex;
			flex-direction: column;
			color: var(--text-primary);
		}
	}
	.lr {
		flex-direction: row-reverse;
	}
	@media only screen and (min-width: 3440px) {
		.person__container {
			font-size: 1.6rem;
		}
	}
	@media only screen and (max-width: 768px) {
		img {
			width: 50%;
			height: 75%;
		}
		.person__container {
			font-size: 0.8rem;
		}
	}
	@media only screen and (max-width: 500px) {
		img {
			width: 50%;
			height: 50%;
		}
		.person__container {
			font-size: 0.6rem;
		}
	}
</style>
