<template>
	<div class="paginate-container">
		<div
			class="circle"
			:class="{ active: isActive(index) }"
			v-for="(page, index) in pagesNumber"
			:key="`page-${index}`"
		></div>
	</div>
</template>

<script>
	export default {
		props: {
			pagesNumber: [Number],
			questionsNumber: [Number],
		},
		methods: {
			isActive(index) {
				return index === this.questionsNumber - 1 ? true : false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.paginate-container {
		color: white;
		border: 1px solid #fe519e;
		padding: 1em;
		width: 350px;
		display: flex;
		justify-content: space-evenly;
		margin-top: 2em;
		.circle {
			border-radius: 50%;
			background: #977e8b;

			height: 35px;
			width: 35px;
		}
		.circle:hover {
			background: #fe519e;
		}
		.active {
			background: #fe519e;
		}
	}
</style>
